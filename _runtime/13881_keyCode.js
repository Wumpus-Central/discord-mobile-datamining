// === Module 13881: keyCode ===

// Module 13881 (keyCode)
let num2;
let num3;
let num4;
function keyCode(which) {
  let tmp = which;
  if (tmp) {
    tmp = which;
    if (typeof which === "object") {
      tmp = which;
      if (which.which || which.keyCode || which.charCode) {
        tmp = tmp2;
      }
    }
  }
  if (typeof tmp === "number") {
    return obj2[tmp];
  } else {
    const _String = String;
    const str = String(tmp);
    let tmp6 = rect[str.toLowerCase(str)];
    if (!tmp6) {
      let tmp4 = obj[str.toLowerCase(str)];
      if (!tmp4) {
        let charCodeAtResult;
        if (1 === str.length) {
          charCodeAtResult = str.charCodeAt(0);
        }
        tmp4 = charCodeAtResult;
      }
      tmp6 = tmp4;
    }
    return tmp6;
  }
}
keyCode.isEventKey = function isEventKey(which, str) {
  const tmp = which;
  if (tmp) {
    if (typeof which === "object") {
      if (null == (which.which || which.keyCode || which.charCode)) {
        return false;
      } else {
        if (typeof str === "string") {
          const tmp6 = rect[str.toLowerCase(str)];
          if (tmp6) {
            return tmp6 === (which.which || which.keyCode || which.charCode);
          } else {
            const tmp8 = obj[str.toLowerCase(str)];
            if (tmp8) {
              return tmp8 === (which.which || which.keyCode || which.charCode);
            }
          }
        } else if (typeof str === "number") {
          return str === (which.which || which.keyCode || which.charCode);
        }
        return false;
      }
    }
  }
};
const rect = { backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, "pause/break": 19, "caps lock": 20, esc: 27, space: 32, "page up": 33, "page down": 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, delete: 46, command: 91, "left command": 91, "right command": 93, "numpad *": 106, "numpad +": 107, "numpad -": 109, "numpad .": 110, "numpad /": 111, "num lock": 144, "scroll lock": 145, "my computer": 182, "my calculator": 183, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222 };
keyCode.codes = rect;
keyCode.code = rect;
const aliases = { windows: 91, "\u21e7": 16, "\u2325": 18, "\u2303": 17, "\u2318": 91, ctl: 17, control: 17, option: 18, pause: 19, break: 19, caps: 20, return: 13, escape: 27, spc: 32, spacebar: 32, pgup: 33, pgdn: 34, ins: 45, del: 46, cmd: 91 };
keyCode.aliases = aliases;
let num = 97;
do {
  let _String = String;
  rect[String.fromCharCode(num)] = num - 32;
  num = num + 1;
  num2 = 48;
} while (num < 123);
do {
  rect[num2 - 48] = num2;
  num2 = num2 + 1;
  num3 = 1;
} while (num2 < 58);
do {
  rect["f" + num3] = num3 + 111;
  num3 = num3 + 1;
  num4 = 0;
} while (num3 < 13);
do {
  rect["numpad " + num4] = num4 + 96;
  num4 = num4 + 1;
} while (num4 < 10);
const obj2 = {};
keyCode.title = obj2;
keyCode.names = obj2;
const keys = Object.keys();
if (keys !== undefined) {
  const tmp2 = keys[10];
  while (tmp2 !== undefined) {
    obj2[rect[tmp2]] = tmp2;
    continue;
  }
}
const keys1 = Object.keys();
if (keys1 !== undefined) {
  let tmp4 = keys1[10];
  while (tmp4 !== undefined) {
    let tmp6 = tmp4;
    rect[tmp4] = aliases[tmp4];
    continue;
  }
}

export default keyCode;