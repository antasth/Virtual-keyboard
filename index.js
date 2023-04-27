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

function createKeyboard(buttonsArray) {
  for (let i = 1; i <= 5; i += 1) {
    const row = buttonsArray.filter((item) => item.row === i);
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');
    row.forEach((item) => {
      const button = document.createElement('div');
      const buttonSpan = document.createElement('span');
      button.classList.add('button');
      button.classList.add(`${item.name}`);
      buttonSpan.innerText = item.value;
      button.append(buttonSpan);
      keyboardRow.append(button);
    });
    keyboard.append(keyboardRow);
  }
}
createKeyboard(buttons);

keyboard.addEventListener('click', (event) => {
  console.log(event.target);
  if (
    event.target !== keyboard &&
    !event.target.classList.contains('keyboard__row')
  ) {
    textArea.value += event.target.innerText;
  }
});

function onKeyPressed(e) {
  keyboard.childNodes.forEach((element) => {
    if (element.classList.contains(e.code)) {
      console.log(element);
      if (e.type === 'keydown') {
        element.classList.add('active-key');
      } else {
        element.classList.remove('active-key');
      }
    }
  });
}
textArea.onkeydown = onKeyPressed;
textArea.onkeyup = onKeyPressed;
