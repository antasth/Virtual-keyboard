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

const toggleButtonsCase = () => {
  const keys = document.querySelectorAll('.key');
  const caps = document.querySelector('.CapsLock');
  caps.classList.toggle('active-key');
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
      event.target.classList.contains('Tab') ||
      event.target.parentElement.classList.contains('Tab')
    ) {
      textArea.value += '  ';
    } else {
      textArea.value += event.target.innerText;
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
          textArea.value += '  ';
        }
        if (e.code === 'CapsLock') {
          toggleButtonsCase();
          return;
        }
        element.classList.add('active-key');
      } else if (e.code !== 'CapsLock') {
        element.classList.remove('active-key');
      }
    }
  });
};
textArea.onkeydown = onKeyPressed;
textArea.onkeyup = onKeyPressed;
