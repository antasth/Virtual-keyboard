import buttons from './data/buttons.js';

const body = document.querySelector('body');
const content = document.createElement('div');
content.classList.add('content');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const textArea = document.createElement('textarea');
textArea.classList.add('text-area');

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
      button.classList.add('button');
      button.classList.add(`${item.name}`);
      buttonSpan.innerHTML = item.value;
      button.append(buttonSpan);
      keyboardRow.append(button);
    });
    keyboard.append(keyboardRow);
  }
};
createKeyboard(buttons);

keyboard.addEventListener('click', (event) => {
  if (
    event.target !== keyboard &&
    !event.target.classList.contains('keyboard__row')
  ) {
    textArea.value += event.target.innerText;
  }
});

const onKeyPressed = (e) => {
  const keyboardButtons = document.querySelectorAll('.button');
  keyboardButtons.forEach((element) => {
    if (element.classList.contains(e.code)) {
      if (e.type === 'keydown') {
        element.classList.add('active-key');
      } else {
        element.classList.remove('active-key');
      }
    }
  });
};
textArea.onkeydown = onKeyPressed;
textArea.onkeyup = onKeyPressed;

// const arrow = document.querySelector('.ArrowDown');
// arrow.content = '&#9742;';
