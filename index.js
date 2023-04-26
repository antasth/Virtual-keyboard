import buttons from './data/buttons.js';

const body = document.querySelector('body');
console.log(body);

const content = document.createElement('div');
content.classList.add('content');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const textArea = document.createElement('textarea');
textArea.classList.add('text-area');

body.append(content);
content.append(textArea, keyboard);

const firstRow = buttons.filter((item) => item.row === 1);

console.log(firstRow);

firstRow.forEach((item) => {
  const button = document.createElement('div');
  const buttonSpan = document.createElement('span');
  button.classList.add('button');
  button.classList.add(`${item.name}`);
  buttonSpan.innerText = item.value;
  button.append(buttonSpan);
  keyboard.append(button);
});
