import buttons from './data/buttons.js';

const body = document.querySelector('body');
const content = document.createElement('div');
content.classList.add('content');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const textArea = document.createElement('textarea');
textArea.classList.add('text-area');

document.addEventListener('click', () => {
  textArea.focus();
});

body.append(content);
content.append(textArea, keyboard);

const createKeyboard = (buttonsArray) => {
  for (let i = 1; i <= 5; i += 1) {
    const row = buttonsArray.filter((item) => item.row === i);
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');
    row.forEach((item) => {
      const button = document.createElement('div');
      const buttonSpan = document.createElement('span');
      button.classList.add('button', `${item.name}`, `${item.type}`);
      buttonSpan.innerHTML = item.value;
      button.append(buttonSpan);
      keyboardRow.append(button);
    });
    keyboard.append(keyboardRow);
  }
};
createKeyboard(buttons);

const getCursorPosition = () => {
  const position = textArea.selectionStart;
  return position;
};

const toggleButtonPressed = (buttonClass) => {
  const button = document.querySelector(`${buttonClass}`);
  button.classList.toggle('active-key');
};

// Capslock
const toggleButtonsCase = () => {
  const keys = document.querySelectorAll('.key');
  toggleButtonPressed('.CapsLock');
  keys.forEach((key) => {
    const buttonText = key;
    if (
      buttonText.firstChild.textContent ===
      buttonText.firstChild.textContent.toUpperCase()
    ) {
      buttonText.firstChild.textContent = key.innerText.toLowerCase();
    } else {
      buttonText.firstChild.textContent = key.innerText.toUpperCase();
    }
  });
};

// Shift
let shiftState = false;
const toggleSymbols = () => {
  const allButtons = document.querySelectorAll('.button');
  shiftState = !shiftState;
  buttons.forEach((button) => {
    if (button.symbol) {
      const current = Array.from(allButtons).find((item) =>
        item.classList.contains(button.name)
      );
      if (shiftState) {
        current.firstChild.textContent = button.symbol;
      } else {
        current.firstChild.textContent = button.value;
      }
    }
  });
};

keyboard.addEventListener('click', (event) => {
  if (
    event.target !== keyboard &&
    !event.target.classList.contains('keyboard__row')
  ) {
    if (
      event.target.classList.contains('CapsLock') ||
      event.target.parentElement.classList.contains('CapsLock')
    ) {
      toggleButtonsCase();
      return;
    }

    if (
      event.target.classList.contains('ShiftLeft') ||
      event.target.parentElement.classList.contains('ShiftLeft')
    ) {
      const rightShift = document.querySelector('.ShiftRight');
      if (!rightShift.classList.contains('active-key')) {
        toggleSymbols();
        toggleButtonPressed('.ShiftLeft');
        return;
      }
    }

    if (
      event.target.classList.contains('ShiftRight') ||
      event.target.parentElement.classList.contains('ShiftRight')
    ) {
      const leftShift = document.querySelector('.ShiftLeft');
      if (!leftShift.classList.contains('active-key')) {
        toggleSymbols();
        toggleButtonPressed('.ShiftRight');
        return;
      }
    }
    if (
      event.target.classList.contains('Tab') ||
      event.target.parentElement.classList.contains('Tab')
    ) {
      const position = getCursorPosition();
      const text = textArea.value;
      const tab = '  ';
      textArea.value = text.slice(0, position) + tab + text.slice(position);
      textArea.selectionEnd = position + 2;
    } else if (
      event.target.innerText !== 'shift' &&
      event.target.innerText !== 'backspace' &&
      event.target.innerText !== 'del'
    ) {
      textArea.value += event.target.innerText;
    }
    if (
      event.target.classList.contains('Backspace') ||
      event.target.parentElement.classList.contains('Backspace')
    ) {
      if (textArea.value) {
        const position = getCursorPosition();
        const text = textArea.value;
        textArea.value = text.slice(0, position - 1) + text.slice(position);
        textArea.selectionEnd = position - 1;
      }
    }
    if (
      event.target.classList.contains('Delete') ||
      event.target.parentElement.classList.contains('Delete')
    ) {
      if (textArea.value) {
        const position = getCursorPosition();
        const text = textArea.value;
        textArea.value = text.slice(0, position) + text.slice(position + 1);
        textArea.selectionEnd = position;
      }
    }
  }
});

const onKeyPressed = (e) => {
  const keyboardButtons = document.querySelectorAll('.button');
  keyboardButtons.forEach((element) => {
    if (element.classList.contains(e.code)) {
      if (e.type === 'keydown') {
        if (e.code === 'Tab') {
          e.preventDefault();
          const position = getCursorPosition();
          const text = textArea.value;
          const tab = '  ';
          textArea.value = text.slice(0, position) + tab + text.slice(position);
          textArea.selectionEnd = position + 2;
        }
        if (e.code === 'CapsLock') {
          toggleButtonsCase();
          return;
        }
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          toggleSymbols();
          toggleButtonPressed(`.${e.code}`);
        }
        element.classList.add('active-key');
      } else if (e.code !== 'CapsLock') {
        element.classList.remove('active-key');

        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          shiftState = true;
          toggleSymbols();
        }
      }
    }
  });
};
textArea.onkeydown = onKeyPressed;
textArea.onkeyup = onKeyPressed;
