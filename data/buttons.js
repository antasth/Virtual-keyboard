const buttons = [
  {
    id: 1,
    value: 'esc',
    name: 'Escape',
    row: 1,
  },
  {
    id: 2,
    value: '`',
    name: 'Backquote',
    row: 1,
  },
  {
    id: 3,
    value: '1',
    name: 'Digit1',
    row: 1,
  },
  {
    id: 4,
    value: '2',
    name: 'Digit2',
    row: 1,
  },
  {
    id: 5,
    value: '3',
    name: 'Digit3',
    row: 1,
  },
  {
    id: 6,
    value: '4',
    name: 'Digit4',
    row: 1,
  },
  {
    id: 7,
    value: '5',
    name: 'Digit5',
    row: 1,
  },
  {
    id: 8,
    value: '6',
    name: 'Digit6',
    row: 1,
  },
  {
    id: 9,
    value: '7',
    name: 'Digit7',
    row: 1,
  },
  {
    id: 10,
    value: '8',
    name: 'Digit8',
    row: 1,
  },
  {
    id: 11,
    value: '9',
    name: 'Digit9',
    row: 1,
  },
  {
    id: 12,
    value: '0',
    name: 'Digit0',
    row: 1,
  },
  {
    id: 13,
    value: '-',
    name: 'Minus',
    row: 1,
  },
  {
    id: 14,
    value: '=',
    name: 'Equal',
    row: 1,
  },
  {
    id: 15,
    value: 'backspace',
    name: 'Backspace',
    row: 1,
  },
  {
    id: 16,
    value: 'tab',
    name: 'Tab',
    row: 2,
  },
  {
    id: 17,
    value: 'q',
    name: 'KeyQ',
    row: 2,
  },
  {
    id: 18,
    value: 'w',
    name: 'KeyW',
    row: 2,
  },
  {
    id: 19,
    value: 'e',
    name: 'KeyE',
    row: 2,
  },
  {
    id: 20,
    value: 'r',
    name: 'KeyR',
    row: 2,
  },
  {
    id: 21,
    value: 't',
    name: 'KeyT',
    row: 2,
  },
  {
    id: 22,
    value: 'y',
    name: 'KeyY',
    row: 2,
  },
  {
    id: 23,
    value: 'u',
    name: 'KeyU',
    row: 2,
  },
  {
    id: 24,
    value: 'i',
    name: 'KeyI',
    row: 2,
  },
  {
    id: 25,
    value: 'o',
    name: 'KeyO',
    row: 2,
  },
  {
    id: 26,
    value: 'p',
    name: 'KeyP',
    row: 2,
  },
  {
    id: 27,
    value: '[',
    name: 'BracketLeft',
    row: 2,
  },
  {
    id: 28,
    value: ']',
    name: 'BracketRight',
    row: 2,
  },
  {
    id: 29,
    value: '\\',
    name: 'Backslash',
    row: 2,
  },
  {
    id: 30,
    value: 'caps lock',
    name: 'CapsLock',
    row: 3,
  },
  {
    id: 31,
    value: 'caps lock',
    name: 'CapsLock',
    row: 3,
  },
  {
    id: 32,
    value: 'a',
    name: 'KeyA',
    row: 3,
  },
  {
    id: 33,
    value: 's',
    name: 'KeyS',
    row: 3,
  },
  {
    id: 34,
    value: 'd',
    name: 'KeyD',
    row: 3,
  },
  {
    id: 35,
    value: 'f',
    name: 'KeyF',
    row: 3,
  },
  {
    id: 36,
    value: 'g',
    name: 'KeyG',
    row: 3,
  },
  {
    id: 37,
    value: 'h',
    name: 'KeyH',
    row: 3,
  },
  {
    id: 38,
    value: 'j',
    name: 'KeyJ',
    row: 3,
  },
  {
    id: 38,
    value: 'j',
    name: 'KeyJ',
    row: 3,
  },
  {
    id: 39,
    value: 'k',
    name: 'KeyK',
    row: 3,
  },
  {
    id: 40,
    value: 'l',
    name: 'KeyL',
    row: 3,
  },
  {
    id: 41,
    value: ':',
    name: 'Semicolon',
    row: 3,
  },
  {
    id: 42,
    value: "'",
    name: 'Quote',
    row: 3,
  },
  {
    id: 43,
    value: 'enter',
    name: 'Enter',
    row: 3,
  },
  {
    id: 44,
    value: 'shift',
    name: 'ShiftLeft',
    row: 4,
  },
  {
    id: 45,
    value: 'z',
    name: 'KeyZ',
    row: 4,
  },
  {
    id: 46,
    value: 'x',
    name: 'KeyX',
    row: 4,
  },
  {
    id: 47,
    value: 'c',
    name: 'KeyC',
    row: 4,
  },
  {
    id: 48,
    value: 'v',
    name: 'KeyV',
    row: 4,
  },
  {
    id: 49,
    value: 'b',
    name: 'KeyB',
    row: 4,
  },
  {
    id: 50,
    value: 'n',
    name: 'KeyN',
    row: 4,
  },
  {
    id: 51,
    value: 'm',
    name: 'KeyM',
    row: 4,
  },
  {
    id: 52,
    value: ',',
    name: 'Comma',
    row: 4,
  },
  {
    id: 53,
    value: '.',
    name: 'Period',
    row: 4,
  },
  {
    id: 54,
    value: '/',
    name: 'Slash',
    row: 4,
  },
  {
    id: 55,
    value: '&#9650;',
    name: 'ArrowUp',
    row: 4,
  },
  {
    id: 56,
    value: 'shift',
    name: 'ShiftRight',
    row: 4,
  },
  {
    id: 57,
    value: 'ctrl',
    name: 'ControlLeft',
    row: 5,
  },
  {
    id: 58,
    value: 'win',
    name: 'MetaLeft',
    row: 5,
  },
  {
    id: 59,
    value: 'alt',
    name: 'AltLeft',
    row: 5,
  },
  {
    id: 60,
    value: '',
    name: 'Space',
    row: 5,
  },
  {
    id: 61,
    value: 'alt',
    name: 'AltRight',
    row: 5,
  },
  {
    id: 62,
    value: '&#9668;',
    name: 'ArrowLeft',
    row: 5,
  },
  {
    id: 63,
    value: '&#9660;',
    name: 'ArrowDown',
    row: 5,
  },
  {
    id: 64,
    value: '&#9658;',
    name: 'ArrowRight',
    row: 5,
  },
  {
    id: 65,
    value: 'ctrl',
    name: 'ControlRight',
    row: 5,
  },
];

export default buttons;