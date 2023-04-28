const buttons = [
  {
    id: 1,
    value: 'esc',
    name: 'Escape',
    type: 'control',
    row: 1,
  },
  {
    id: 2,
    value: '`',
    name: 'Backquote',
    type: 'key',
    row: 1,
  },
  {
    id: 3,
    value: '1',
    name: 'Digit1',
    type: 'key',
    row: 1,
  },
  {
    id: 4,
    value: '2',
    name: 'Digit2',
    type: 'key',
    row: 1,
  },
  {
    id: 5,
    value: '3',
    name: 'Digit3',
    type: 'key',
    row: 1,
  },
  {
    id: 6,
    value: '4',
    name: 'Digit4',
    type: 'key',
    row: 1,
  },
  {
    id: 7,
    value: '5',
    name: 'Digit5',
    type: 'key',
    row: 1,
  },
  {
    id: 8,
    value: '6',
    name: 'Digit6',
    type: 'key',
    row: 1,
  },
  {
    id: 9,
    value: '7',
    name: 'Digit7',
    type: 'key',
    row: 1,
  },
  {
    id: 10,
    value: '8',
    name: 'Digit8',
    type: 'key',
    row: 1,
  },
  {
    id: 11,
    value: '9',
    name: 'Digit9',
    type: 'key',
    row: 1,
  },
  {
    id: 12,
    value: '0',
    name: 'Digit0',
    type: 'key',
    row: 1,
  },
  {
    id: 13,
    value: '-',
    name: 'Minus',
    type: 'key',
    row: 1,
  },
  {
    id: 14,
    value: '=',
    name: 'Equal',
    type: 'key',
    row: 1,
  },
  {
    id: 15,
    value: 'backspace',
    name: 'Backspace',
    type: 'control',
    row: 1,
  },
  {
    id: 16,
    value: 'tab',
    name: 'Tab',
    type: 'control',
    row: 2,
  },
  {
    id: 17,
    value: 'q',
    name: 'KeyQ',
    type: 'key',
    row: 2,
  },
  {
    id: 18,
    value: 'w',
    name: 'KeyW',
    type: 'key',
    row: 2,
  },
  {
    id: 19,
    value: 'e',
    name: 'KeyE',
    type: 'key',
    row: 2,
  },
  {
    id: 20,
    value: 'r',
    name: 'KeyR',
    type: 'key',
    row: 2,
  },
  {
    id: 21,
    value: 't',
    name: 'KeyT',
    type: 'key',
    row: 2,
  },
  {
    id: 22,
    value: 'y',
    name: 'KeyY',
    type: 'key',
    row: 2,
  },
  {
    id: 23,
    value: 'u',
    name: 'KeyU',
    type: 'key',
    row: 2,
  },
  {
    id: 24,
    value: 'i',
    name: 'KeyI',
    type: 'key',
    row: 2,
  },
  {
    id: 25,
    value: 'o',
    name: 'KeyO',
    type: 'key',
    row: 2,
  },
  {
    id: 26,
    value: 'p',
    name: 'KeyP',
    type: 'key',
    row: 2,
  },
  {
    id: 27,
    value: '[',
    name: 'BracketLeft',
    type: 'key',
    row: 2,
  },
  {
    id: 28,
    value: ']',
    name: 'BracketRight',
    type: 'key',
    row: 2,
  },
  {
    id: 29,
    value: '\\',
    name: 'Backslash',
    type: 'key',
    row: 2,
  },
  {
    id: 30,
    value: 'del',
    name: 'Delete',
    type: 'control',
    row: 2,
  },
  {
    id: 30,
    value: 'caps lock',
    name: 'CapsLock',
    type: 'control',
    row: 3,
  },
  {
    id: 31,
    value: 'a',
    name: 'KeyA',
    type: 'key',
    row: 3,
  },
  {
    id: 32,
    value: 's',
    name: 'KeyS',
    type: 'key',
    row: 3,
  },
  {
    id: 33,
    value: 'd',
    name: 'KeyD',
    type: 'key',
    row: 3,
  },
  {
    id: 34,
    value: 'f',
    name: 'KeyF',
    type: 'key',
    row: 3,
  },
  {
    id: 35,
    value: 'g',
    name: 'KeyG',
    type: 'key',
    row: 3,
  },
  {
    id: 36,
    value: 'h',
    name: 'KeyH',
    type: 'key',
    row: 3,
  },
  {
    id: 37,
    value: 'j',
    name: 'KeyJ',
    type: 'key',
    row: 3,
  },
  {
    id: 39,
    value: 'k',
    name: 'KeyK',
    type: 'key',
    row: 3,
  },
  {
    id: 40,
    value: 'l',
    name: 'KeyL',
    type: 'key',
    row: 3,
  },
  {
    id: 41,
    value: ':',
    name: 'Semicolon',
    type: 'key',
    row: 3,
  },
  {
    id: 42,
    value: "'",
    name: 'Quote',
    type: 'key',
    row: 3,
  },
  {
    id: 43,
    value: 'enter',
    name: 'Enter',
    type: 'control',
    row: 3,
  },
  {
    id: 44,
    value: 'shift',
    name: 'ShiftLeft',
    type: 'control',
    row: 4,
  },
  {
    id: 45,
    value: 'z',
    name: 'KeyZ',
    type: 'key',
    row: 4,
  },
  {
    id: 46,
    value: 'x',
    name: 'KeyX',
    type: 'key',
    row: 4,
  },
  {
    id: 47,
    value: 'c',
    name: 'KeyC',
    type: 'key',
    row: 4,
  },
  {
    id: 48,
    value: 'v',
    name: 'KeyV',
    type: 'key',
    row: 4,
  },
  {
    id: 49,
    value: 'b',
    name: 'KeyB',
    type: 'key',
    row: 4,
  },
  {
    id: 50,
    value: 'n',
    name: 'KeyN',
    type: 'key',
    row: 4,
  },
  {
    id: 51,
    value: 'm',
    name: 'KeyM',
    type: 'key',
    row: 4,
  },
  {
    id: 52,
    value: ',',
    name: 'Comma',
    type: 'key',
    row: 4,
  },
  {
    id: 53,
    value: '.',
    name: 'Period',
    type: 'key',
    row: 4,
  },
  {
    id: 54,
    value: '/',
    name: 'Slash',
    type: 'key',
    row: 4,
  },
  {
    id: 55,
    value: '&#9650;',
    name: 'ArrowUp',
    type: 'control',
    row: 4,
  },
  {
    id: 56,
    value: 'shift',
    name: 'ShiftRight',
    type: 'control',
    row: 4,
  },
  {
    id: 57,
    value: 'ctrl',
    name: 'ControlLeft',
    type: 'control',
    row: 5,
  },
  {
    id: 58,
    value: 'win',
    name: 'MetaLeft',
    type: 'control',
    row: 5,
  },
  {
    id: 59,
    value: 'alt',
    name: 'AltLeft',
    type: 'control',
    row: 5,
  },
  {
    id: 60,
    value: '',
    name: 'Space',
    type: 'control',
    row: 5,
  },
  {
    id: 61,
    value: 'alt',
    name: 'AltRight',
    type: 'control',
    row: 5,
  },
  {
    id: 62,
    value: '&#9668;',
    name: 'ArrowLeft',
    type: 'control',
    row: 5,
  },
  {
    id: 63,
    value: '&#9660;',
    name: 'ArrowDown',
    type: 'control',
    row: 5,
  },
  {
    id: 64,
    value: '&#9658;',
    name: 'ArrowRight',
    type: 'control',
    row: 5,
  },
  {
    id: 65,
    value: 'ctrl',
    name: 'ControlRight',
    type: 'control',
    row: 5,
  },
];

export default buttons;
