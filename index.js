import buttons from './data/buttons.js';

console.log(buttons);

const body = document.querySelector('body');
console.log(body);

const keyboard = document.createElement('div');
keyboard.classList.add('content');

body.append(keyboard);

const firstRow = buttons.filter((item) => item.row === 1);

console.log(firstRow);
