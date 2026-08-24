// discord_app/utils/web/KeyboardUtils.tsx
import set2 from "../PlatformUtils.tsx";
import isDiscordFrontendDevelopment from "../GlobalUtils.tsx";
import keyCodeDefault from "../../../_runtime/13229_keyCode.js";
import normalizeKey from "KeyboardLayoutMapUtils.tsx";
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import items from "../../../discord_common/js/shared/constants/KeyboardConstants.tsx";
import set from "../PlatformUtils.tsx";
import importDefaultResult from "../../../_runtime/00012_apply.js";

require = arg1;
function getCodeToKeyLanguageCorrection(keyCode, key, arg2) {
  if (null != arg2) {
    if (arg2 !== KeyboardEnvs.WINDOWS) {
      return key;
    }
  }
  const BACKTICK_CODES = normalizeKey.BACKTICK_CODES;
  if (BACKTICK_CODES.has(keyCode)) {
    let tmp2Result = tmp2(13230);
    const layoutMap = tmp2Result.getLayoutMap();
    let value = layoutMap.get("Backquote");
    if (key === value) {
      let str7 = "plus";
      if ("+" !== key) {
        str7 = key;
      }
      return str7;
    } else {
      tmp2Result = tmp2(13230);
      const obj = { key: null, code: "Backquote", keyCode: null };
      obj[0] = value;
      obj[2] = keyCode;
      const exactKeyboardEventMatchFromAny = tmp2Result.getExactKeyboardEventMatchFromAny(obj);
      if ("\\" === key) {
        let tmp6 = key;
        return tmp6;
      }
      if (null == exactKeyboardEventMatchFromAny) {
        if (value == null) {
          value = key;
        }
        key = value;
      } else {
        key = exactKeyboardEventMatchFromAny.key;
      }
      let str5 = "plus";
      if ("+" !== key) {
        str5 = key;
      }
      tmp6 = str5;
    }
  } else {
    return key;
  }
}
function keyToCode(toLocaleLowerCase) {
  if (arg1 !== undefined) {
    let KEYBOARD_KEY = arg2;
    if (arg2 === undefined) {
      KEYBOARD_KEY = constants.KEYBOARD_KEY;
    }
    if (arg1 !== undefined) {
      if (KEYBOARD_KEY === undefined) {
        KEYBOARD_KEY = constants.KEYBOARD_KEY;
      }
      let tmp17 = null;
      if (null != toLocaleLowerCase) {
        let tmp20 = tmp19;
        if (KEYBOARD_KEY === constants.KEYBOARD_KEY || KEYBOARD_KEY === constants.KEYBOARD_MODIFIER_KEY) {
          tmp20 = arg1 === KeyboardEnvs.LINUX;
        }
        if (tmp20 === true) {
          let parsed = LinuxKeyToCode[toLocaleLowerCase];
        } else {
          let tmp23 = tmp19;
          if (tmp19) {
            tmp23 = arg1 === KeyboardEnvs.MACOS;
          }
          if (tmp23 === true) {
            parsed = MacosKeyToCode[toLocaleLowerCase];
          } else {
            let tmp25 = tmp19;
            if (tmp19) {
              tmp25 = arg1 === KeyboardEnvs.WINDOWS;
            }
            if (tmp25 === true) {
              if ("+" === toLocaleLowerCase) {
                let plus = WindowsKeyToCode.plus;
              } else {
                plus = WindowsKeyToCode[toLocaleLowerCase];
              }
              parsed = plus;
            } else {
              let tmp27 = tmp19;
              if (tmp19) {
                tmp27 = arg1 === KeyboardEnvs.BROWSER;
              }
              if (tmp27 === true) {
                const tmp39 = keyCodeDefault;
                const replaced = toLocaleLowerCase.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
                let str13 = "pause/break";
                if ("pause" !== replaced) {
                  str13 = "pause/break";
                  if ("break" !== replaced) {
                    str13 = replaced;
                  }
                }
                parsed = tmp39(str13);
                const str8 = toLocaleLowerCase.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2");
              } else if (tmp19 === true) {
                parsed = set[toLocaleLowerCase];
              } else if (KEYBOARD_KEY === tmp18.MOUSE_BUTTON === true) {
                const _parseInt2 = parseInt;
                parsed = parseInt(toLocaleLowerCase.replace("MOUSE", ""), 10);
              } else if (KEYBOARD_KEY === tmp18.GAMEPAD_BUTTON === true) {
                const _parseInt = parseInt;
                parsed = parseInt(toLocaleLowerCase.replace("GAMEPAD", ""), 10);
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                error = new Error("Unrecognized DeviceType " + KEYBOARD_KEY + ".");
                throw error;
              }
            }
          }
        }
        tmp17 = null;
        if (null != parsed) {
          tmp17 = parsed;
        }
      }
      if (null != tmp17) {
        return tmp17;
      } else {
        const keyboardEventShapeFromKey = normalizeKey.getKeyboardEventShapeFromKey(toLocaleLowerCase);
        let keyCode = null;
        if (null != keyboardEventShapeFromKey) {
          keyCode = keyboardEventShapeFromKey.keyCode;
        }
        return keyCode;
      }
    } else {
      if (obj4.isLinux()) {
        let MACOS2 = KeyboardEnvs.LINUX;
      } else {
        let tmp8Result = tmp8(500);
        if (tmp8Result.isMac()) {
          MACOS2 = KeyboardEnvs.MACOS;
        } else {
          tmp8Result = tmp8(500);
          MACOS2 = tmp8Result.isWindows() ? tmp10.WINDOWS : tmp10.BROWSER;
        }
      }
      obj4 = set2;
    }
  } else {
    if (obj.isLinux()) {
      let MACOS = KeyboardEnvs.LINUX;
    } else {
      let tmpResult = tmp(500);
      if (tmpResult.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        tmpResult = tmp(500);
        MACOS = tmpResult.isWindows() ? tmp3.WINDOWS : tmp3.BROWSER;
      }
    }
    obj = set2;
  }
}
function getKeyConversionForBrowser(str) {
  const replaced = str.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
  let str2 = "pause/break";
  if ("pause" !== replaced) {
    str2 = "pause/break";
    if ("break" !== replaced) {
      str2 = replaced;
    }
  }
  return str2;
}
function toPrettyKey(str) {
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    if (tmp5 === str.toUpperCase()) {
      let tmp7 = obj;
      obj.return();
      return tmp6;
    }
  }
  return str;
}
({ KeyboardDeviceTypes: c5, LinuxKeyToCode } = items);
const MacosKeyToCode = items.MacosKeyToCode;
const WindowsKeyToCode = items.WindowsKeyToCode;
const KeyboardEnvs = items.KeyboardEnvs;
set = LinuxKeyToCode;
if (!set.isLinux()) {
  let tmp3 = MacosKeyToCode;
  if (!obj3.isMac()) {
    set = WindowsKeyToCode;
    if (!obj4.isWindows()) {
      set = {};
    }
    tmp3 = set;
    obj4 = require("set");
  }
  set = tmp3;
  obj3 = require("set");
}
const invertResult = importDefaultResult.invert(LinuxKeyToCode);
const unpackModuleId = invertResult;
invertResult[223] = "`";
const frozen = Object.freeze(invertResult);
let closure_12 = Object.freeze(importDefaultResult.invert(MacosKeyToCode));
const importDefaultResult1 = importDefaultResult;
const invertResult1 = importDefaultResult.invert(WindowsKeyToCode);
invertResult1[223] = "`";
const frozen1 = Object.freeze(invertResult1);
const importDefaultResult2 = importDefaultResult;
if (set == null) {
  set = {};
}
set = importDefaultResult.invert(set);
if (!set.isMac()) {
  set[223] = "`";
}
function getEnv() {
  if (obj.isLinux()) {
    let MACOS = KeyboardEnvs.LINUX;
  } else {
    let tmpResult = tmp(500);
    if (tmpResult.isMac()) {
      MACOS = KeyboardEnvs.MACOS;
    } else {
      tmpResult = tmp(500);
      MACOS = tmpResult.isWindows() ? tmp3.WINDOWS : tmp3.BROWSER;
    }
  }
  return MACOS;
}
function codeToKey(items1) {
  const tmp = callback(items1, 3);
  const tmp4 = (function _codeToKey(items1) {
    [, tmp, tmp2] = items1;
    if (constants.LINUX === tmp2) {
      let tmp5 = table2["" + tmp];
    } else if (tmp3.MACOS === tmp2) {
      tmp5 = table3["" + tmp];
    } else if (tmp3.WINDOWS === tmp2) {
      tmp5 = table4["" + tmp];
    } else if (tmp3.BROWSER === tmp2) {
      const tmp8 = callback(table[4])(tmp);
      if (null == tmp8) {
        return null;
      } else {
        tmp5 = callback2(tmp8);
      }
    } else {
      tmp5 = table5["" + tmp];
    }
    let tmp14 = null;
    if (null != tmp5) {
      tmp14 = tmp5;
    }
    return tmp14;
  })(items1);
  if (null != tmp4) {
    return getCodeToKeyLanguageCorrection(tmp2, tmp4, tmp3);
  } else {
    const keyboardEventShapeFromKeycode = normalizeKey.getKeyboardEventShapeFromKeycode(tmp2);
    let tmp8 = null;
    if (null != keyboardEventShapeFromKeycode) {
      tmp8 = getCodeToKeyLanguageCorrection(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp3);
    }
    return tmp8;
  }
}
set = Object.freeze(set);
items = [["META", "\u2318"], ["CMD", "\u2318"], ["RIGHT META", "RIGHT \u2318"], ["RIGHT CMD", "RIGHT \u2318"], ["SHIFT", "\u21E7"], ["RIGHT SHIFT", "RIGHT \u21E7"], ["ALT", "\u2325"], ["RIGHT ALT", "RIGHT \u2325"], ["CTRL", "\u2303"], ["RIGHT CTRL", "RIGHT \u2303"], ["ENTER", "\u21B5"], ["BACKSPACE", "\u232B"], ["DEL", "\u2326"], ["ESC", "\u238B"], ["PAGEUP", "\u21DE"], ["PAGEDOWN", "\u21DF"], ["UP", "\u2191"], ["DOWN", "\u2193"], ["LEFT", "\u2190"], ["RIGHT", "\u2192"], ["HOME", "\u2196"], ["END", "\u2198"], ["TAB", "\u21E5"], ["SPACE", "\u2423"]];
const re20 = /shift|meta|ctrl|alt$/;
const result = set.fileFinishedImporting("utils/web/KeyboardUtils.tsx");

export const getRawCodeFromKey = function getRawCodeFromKey(arg0) {
  if (arg1 !== undefined) {
    if (arg1 === KeyboardEnvs.BROWSER) {
      let tmp10 = keyCodeDefault(arg0);
    } else {
      tmp10 = set[arg0];
    }
    return tmp10;
  } else {
    if (obj.isLinux()) {
      let MACOS = KeyboardEnvs.LINUX;
    } else {
      let tmpResult = tmp(500);
      if (tmpResult.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        tmpResult = tmp(500);
        MACOS = tmpResult.isWindows() ? tmp3.WINDOWS : tmp3.BROWSER;
      }
    }
    obj = set2;
  }
};
export { getCodeToKeyLanguageCorrection };
export { getEnv };
export { codeToKey };
export { keyToCode };
export { getKeyConversionForBrowser };
export const toBrowserEvents = function toBrowserEvents(arr) {
  closure_0 = { keyCode: 0, key: "", code: "", metaKey: false, shiftKey: false, altKey: false, ctrlKey: false };
  if (null == arr) {
    items = [];
  } else {
    items = arr.reduce((arr, combo) => {
      const tmp = closure_1_4(combo, 3);
      const tmp4 = (function _codeToKey(items1) {
        [, tmp, tmp2] = items1;
        if (constants.LINUX === tmp2) {
          let tmp5 = table2["" + tmp];
        } else if (tmp3.MACOS === tmp2) {
          tmp5 = table3["" + tmp];
        } else if (tmp3.WINDOWS === tmp2) {
          tmp5 = table4["" + tmp];
        } else if (tmp3.BROWSER === tmp2) {
          const tmp8 = callback(table[4])(tmp);
          if (null == tmp8) {
            return null;
          } else {
            tmp5 = callback2(tmp8);
          }
        } else {
          tmp5 = table5["" + tmp];
        }
        let tmp14 = null;
        if (null != tmp5) {
          tmp14 = tmp5;
        }
        return tmp14;
      })(combo);
      if (null != tmp4) {
        let tmp8 = closure_1_15(tmp2, tmp4, tmp3);
      } else {
        let obj = closure_1_1(closure_1_3[5]);
        const keyboardEventShapeFromKeycode = obj.getKeyboardEventShapeFromKeycode(tmp2);
        tmp8 = null;
        if (null != keyboardEventShapeFromKeycode) {
          tmp8 = closure_1_15(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp3);
        }
      }
      closure_0 = tmp8;
      obj = {};
      const merged = Object.assign(closure_0);
      if (null == tmp8) {
        obj = {};
        const merged1 = Object.assign(obj);
        obj.combo = combo;
        arr.push(obj);
        return arr;
      } else {
        if (closure_1_20.test(tmp8)) {
          let tmp13 = "meta" === tmp8;
          if (!tmp13) {
            tmp13 = "shift" === tmp8;
          }
          if (!tmp13) {
            tmp13 = "alt" === tmp8;
          }
          if (!tmp13) {
            tmp13 = "ctrl" === tmp8;
          }
          if (tmp13) {
            tmp11[tmp8 + "Key"] = true;
            return arr.map((arg0) => {
              arg0[closure_0 + "Key"] = true;
              return arg0;
            });
          }
        }
        const tmp16 = closure_1_16(tmp8, closure_1_9.BROWSER);
        if (null != tmp16) {
          obj.keyCode = tmp16;
        }
        arr.push(obj);
        return arr;
      }
      tmp11 = closure_0;
    }, []);
  }
  return items;
};
export const toCombo = function toCombo(shortcut) {
  if (arg1 !== undefined) {
    closure_0 = arg1;
    let KEYBOARD_KEY = arg2;
    if (arg2 === undefined) {
      KEYBOARD_KEY = constants.KEYBOARD_KEY;
    }
    const str2 = shortcut.replace(/numpad plus/i, "");
    const str4 = shortcut.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus");
    const parts = shortcut.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, KEYBOARD_KEY(13231).modKey).split("+");
    const mapped = parts.map((str) => str.trim().replace("plus", "+"));
    return mapped.reduce((arr) => {
      let tmp3 = closure_1_16((function toUglyKey(str) {
        const obj = dependencyMap[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp3 = callback;
          let tmp4 = callback(tmp2, 2);
          [str, tmp5] = tmp4;
          if (tmp5 === str.toUpperCase()) {
            let tmp6 = str;
            let tmp8 = obj;
            let formatted = str.toLowerCase();
            obj.return();
            return formatted;
          }
        }
        return str;
      })(arg1), closure_0, KEYBOARD_KEY);
      if (null != tmp3) {
        items = [KEYBOARD_KEY, tmp3, closure_0];
        arr.push(items);
      }
      return arr;
    }, []);
  } else {
    if (obj.isLinux()) {
      let MACOS = KeyboardEnvs.LINUX;
    } else {
      let tmpResult = tmp(500);
      if (tmpResult.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        tmpResult = tmp(500);
        MACOS = tmpResult.isWindows() ? tmp3.WINDOWS : tmp3.BROWSER;
      }
    }
    obj = KEYBOARD_KEY(500);
  }
};
export const toString = function toString(arr) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const mapped = arr.map((arg0) => {
    [tmp, tmp2, tmp3] = arg0;
    if (typeof tmp3 === "number") {
      if (constants.KEYBOARD_KEY !== tmp) {
        if (tmp8.KEYBOARD_MODIFIER_KEY !== tmp) {
          if (tmp8.MOUSE_BUTTON === tmp) {
            const _HermesInternal3 = HermesInternal;
            return "mouse" + tmp2;
          } else if (tmp8.GAMEPAD_BUTTON === tmp) {
            const _HermesInternal2 = HermesInternal;
            return "gamepad" + tmp2;
          } else {
            const _HermesInternal = HermesInternal;
            return "dev" + tmp + "," + tmp2;
          }
        }
      }
      if (null != tmp3) {
        items = [tmp, tmp2, tmp3];
        let items1 = items;
      } else {
        items1 = [tmp, tmp2];
      }
      let tmp14 = callback2(items1, 3);
      const tmp17 = (function _codeToKey(items1) {
        [, tmp, tmp2] = items1;
        if (constants.LINUX === tmp2) {
          let tmp5 = table2["" + tmp];
        } else if (tmp3.MACOS === tmp2) {
          tmp5 = table3["" + tmp];
        } else if (tmp3.WINDOWS === tmp2) {
          tmp5 = table4["" + tmp];
        } else if (tmp3.BROWSER === tmp2) {
          const tmp8 = callback(table[4])(tmp);
          if (null == tmp8) {
            return null;
          } else {
            tmp5 = callback2(tmp8);
          }
        } else {
          tmp5 = table5["" + tmp];
        }
        let tmp14 = null;
        if (null != tmp5) {
          tmp14 = tmp5;
        }
        return tmp14;
      })(items1);
      if (null != tmp17) {
        let combined = callback3(tmp15, tmp17, tmp16);
      } else {
        const keyboardEventShapeFromKeycode = callback(13230).getKeyboardEventShapeFromKeycode(tmp15);
        combined = null;
        if (null != keyboardEventShapeFromKeycode) {
          combined = callback3(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp16);
        }
        const obj3 = callback(13230);
      }
      if (combined == null) {
        const _HermesInternal4 = HermesInternal;
        combined = "UNK" + tmp2;
      }
      return combined;
    } else {
      if (obj4.isLinux()) {
        let MACOS = constants2.LINUX;
      } else {
        let tmp25Result = tmp25(500);
        if (tmp25Result.isMac()) {
          MACOS = constants2.MACOS;
        } else {
          tmp25Result = tmp25(500);
          MACOS = tmp25Result.isWindows() ? tmp4.WINDOWS : tmp4.BROWSER;
        }
      }
      obj4 = callback(500);
    }
  });
  const found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  if (flag) {
    const appVersion = global.navigator.appVersion;
    let mapped1 = found;
    if (-1 !== appVersion.indexOf("Mac OS X")) {
      mapped1 = found.map(toPrettyKey);
    }
    let formatted = mapped1.join(" + ").toUpperCase();
    const str4 = mapped1.join(" + ");
  } else {
    formatted = found.join("+");
  }
  return formatted;
};
export const areKeyCombosEqual = function areKeyCombosEqual(arr) {
  closure_0 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  return arr.length === arg1.length && arr.every((arg0, arg1) => {
    [tmp, tmp2, tmp3] = arg0;
    const tmp4 = closure_1_4(table[arg1], 3);
    let tmp5 = tmp === tmp4[0];
    if (tmp5) {
      tmp5 = tmp2 === tmp4[1];
    }
    if (tmp5) {
      let tmp7 = !flag;
      if (flag) {
        tmp7 = tmp3 === tmp4[2];
      }
      tmp5 = tmp7;
    }
    return tmp5;
  });
};
export const isKeyboardActivatedMouseEvent = function isKeyboardActivatedMouseEvent(obj) {
  let tmp = null != obj && typeof obj === "object";
  if (tmp) {
    tmp = "nativeEvent" in obj;
  }
  if (tmp) {
    tmp = 0 === obj.nativeEvent.clientX;
  }
  if (tmp) {
    tmp = 0 === obj.nativeEvent.clientY;
  }
  return tmp;
};