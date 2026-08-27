// === Module 13468: keyCode ===

// Module 13468 (keyCode)
let num2;
let num3;
let num4;
function keyCode(obj) {
  let tmp = obj;
  if (obj) {
    tmp = obj;
    if (typeof obj === "object") {
      tmp = obj;
      if (obj.which || obj.keyCode || obj.charCode) {
        tmp = tmp2;
      }
    }
  }
  if (typeof tmp === "number") {
    return obj[tmp];
  } else {
    const _String = String;
    const str = String(tmp);
    let tmp6 = obj[str.toLowerCase(str)];
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
keyCode.isEventKey = function isEventKey(obj, str) {
  if (obj) {
    if (typeof obj === "object") {
      if (null == (obj.which || obj.keyCode || obj.charCode)) {
        return false;
      } else {
        if (typeof str === "string") {
          const tmp5 = obj[str.toLowerCase(str)];
          if (tmp5) {
            return tmp5 === tmp;
          } else {
            const tmp7 = obj[str.toLowerCase(str)];
            if (tmp7) {
              return tmp7 === tmp;
            }
          }
        } else if (typeof str === "number") {
          return str === tmp;
        }
        return false;
      }
    }
  }
};
let obj = { backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, "pause/break": 19, "caps lock": 20, esc: 27, space: 32, "page up": 33, "page down": 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, delete: 46, command: 91, "left command": 91, "right command": 93, "numpad *": 106, "numpad +": 107, "numpad -": 109, "numpad .": 110, "numpad /": 111, "num lock": 144, "scroll lock": 145, "my computer": 182, "my calculator": 183, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222 };
keyCode.codes = obj;
keyCode.code = obj;
obj = { windows: 91, "⇧": 16, "⌥": 18, "⌃": 17, "⌘": 91, ctl: 17, control: 17, option: 18, pause: 19, break: 19, caps: 20, return: 13, escape: 27, spc: 32, spacebar: 32, pgup: 33, pgdn: 34, ins: 45, del: 46, cmd: 91 };
keyCode.aliases = obj;
let num = 97;
do {
  let _String = String;
  obj[String.fromCharCode(num)] = num - 32;
  num = num + 1;
  num2 = 48;
} while (num < 123);
do {
  obj[num2 - 48] = num2;
  num2 = num2 + 1;
  num3 = 1;
} while (num2 < 58);
do {
  obj["f" + num3] = num3 + 111;
  num3 = num3 + 1;
  num4 = 0;
} while (num3 < 13);
do {
  obj["numpad " + num4] = num4 + 96;
  num4 = num4 + 1;
} while (num4 < 10);
obj = {};
keyCode.title = obj;
keyCode.names = obj;
const keys = Object.keys();
if (keys !== undefined) {
  while (keys[10] !== undefined) {
    let tmp5 = tmp2;
    obj[obj[tmp2]] = tmp2;
    continue;
  }
}
const keys1 = Object.keys();
if (keys1 !== undefined) {
  while (keys1[10] !== undefined) {
    let tmp6 = tmp4;
    obj[tmp4] = obj[tmp4];
    continue;
  }
}

export default keyCode;