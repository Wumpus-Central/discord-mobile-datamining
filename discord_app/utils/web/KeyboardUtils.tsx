// discord_app/utils/web/KeyboardUtils.tsx
import obj1322 from "../PlatformUtils.tsx";
import isDiscordFrontendDevelopment from "../GlobalUtils.tsx";
import keyCodeDefault from "../../../_runtime/13173_keyCode.js";
import normalizeKey from "KeyboardLayoutMapUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import items from "../../../discord_common/js/shared/constants/KeyboardConstants.tsx";
import "obj132";
import importDefaultResult from "../../../_runtime/00012_apply.js";
import obj132 from "../PlatformUtils.tsx";

require = fn;
function getCodeToKeyLanguageCorrection(keyCode, key, arg2) {
  if (null != arg2) {
    if (arg2 !== KeyboardEnvs.WINDOWS) {
      return key;
    }
  }
  const BACKTICK_CODES = normalizeKey.BACKTICK_CODES;
  if (BACKTICK_CODES.has(keyCode)) {
    let tmp2Result = normalizeKey;
    const layoutMap = tmp2Result.getLayoutMap();
    let value = layoutMap.get("Backquote");
    if (key === value) {
      let str7 = "plus";
      if ("+" !== key) {
        str7 = key;
      }
      return str7;
    } else {
      tmp2Result = normalizeKey;
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
function keyToCode(toLocaleLowerCase, BROWSER, KEYBOARD_KEY) {
  if (BROWSER !== undefined) {
    if (KEYBOARD_KEY === undefined) {
      KEYBOARD_KEY = constants.KEYBOARD_KEY;
    }
    if (BROWSER !== undefined) {
      if (KEYBOARD_KEY === undefined) {
        KEYBOARD_KEY = constants.KEYBOARD_KEY;
      }
      let tmp17 = null;
      if (null != toLocaleLowerCase) {
        let tmp20 = tmp19;
        if (KEYBOARD_KEY === constants.KEYBOARD_KEY || KEYBOARD_KEY === constants.KEYBOARD_MODIFIER_KEY) {
          tmp20 = BROWSER === KeyboardEnvs.LINUX;
        }
        if (tmp20 === true) {
          let parsed = LinuxKeyToCode[toLocaleLowerCase];
        } else {
          let tmp23 = tmp19;
          if (tmp19) {
            tmp23 = BROWSER === KeyboardEnvs.MACOS;
          }
          if (tmp23 === true) {
            parsed = MacosKeyToCode[toLocaleLowerCase];
          } else {
            let tmp25 = tmp19;
            if (tmp19) {
              tmp25 = BROWSER === KeyboardEnvs.WINDOWS;
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
                tmp27 = BROWSER === KeyboardEnvs.BROWSER;
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
                parsed = obj132[toLocaleLowerCase];
              } else if (KEYBOARD_KEY === constants.MOUSE_BUTTON === true) {
                const _parseInt2 = parseInt;
                parsed = parseInt(toLocaleLowerCase.replace("MOUSE", ""), 10);
              } else if (KEYBOARD_KEY === constants.GAMEPAD_BUTTON === true) {
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
        let tmp8Result = obj1322;
        if (tmp8Result.isMac()) {
          MACOS2 = KeyboardEnvs.MACOS;
        } else {
          tmp8Result = obj1322;
          MACOS2 = tmp8Result.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
        }
      }
      obj4 = obj1322;
    }
  } else {
    if (obj.isLinux()) {
      let MACOS = KeyboardEnvs.LINUX;
    } else {
      let tmpResult = obj1322;
      if (tmpResult.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        tmpResult = obj1322;
        MACOS = tmpResult.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    obj = obj1322;
  }
}
function getKeyConversionForBrowser(str) {
  str = str.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2");
  const replaced = str.replace("meta", "command");
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
    let tmp4 = callback(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    if (tmp5 === str.toUpperCase()) {
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
let obj132 = LinuxKeyToCode;
if (!obj132.isLinux()) {
  let tmp3 = MacosKeyToCode;
  if (!obj3.isMac()) {
    obj132 = WindowsKeyToCode;
    if (!obj4.isWindows()) {
      obj132 = {};
    }
    tmp3 = obj132;
    obj4 = require("obj132");
  }
  obj132 = tmp3;
  obj3 = require("obj132");
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
if (obj132 == null) {
  obj132 = {};
}
importDefaultResult.invert(obj132);
if (!obj132.isMac()) {
  obj132[223] = "`";
}
function getEnv() {
  if (obj.isLinux()) {
    let MACOS = KeyboardEnvs.LINUX;
  } else {
    let tmpResult = obj1322;
    if (tmpResult.isMac()) {
      MACOS = KeyboardEnvs.MACOS;
    } else {
      tmpResult = obj1322;
      MACOS = tmpResult.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
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
    } else if (constants.MACOS === tmp2) {
      tmp5 = table3["" + tmp];
    } else if (constants.WINDOWS === tmp2) {
      tmp5 = table4["" + tmp];
    } else if (constants.BROWSER === tmp2) {
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
Object.freeze(obj132);
items = [["META", "\u2318"], ["CMD", "\u2318"], ["RIGHT META", "RIGHT \u2318"], ["RIGHT CMD", "RIGHT \u2318"], ["SHIFT", "\u21E7"], ["RIGHT SHIFT", "RIGHT \u21E7"], ["ALT", "\u2325"], ["RIGHT ALT", "RIGHT \u2325"], ["CTRL", "\u2303"], ["RIGHT CTRL", "RIGHT \u2303"], ["ENTER", "\u21B5"], ["BACKSPACE", "\u232B"], ["DEL", "\u2326"], ["ESC", "\u238B"], ["PAGEUP", "\u21DE"], ["PAGEDOWN", "\u21DF"], ["UP", "\u2191"], ["DOWN", "\u2193"], ["LEFT", "\u2190"], ["RIGHT", "\u2192"], ["HOME", "\u2196"], ["END", "\u2198"], ["TAB", "\u21E5"], ["SPACE", "\u2423"]];
const re20 = /shift|meta|ctrl|alt$/;
const result = obj132.fileFinishedImporting("utils/web/KeyboardUtils.tsx");

export const getRawCodeFromKey = function getRawCodeFromKey(arg0) {
  if (arg1 !== undefined) {
    if (arg1 === KeyboardEnvs.BROWSER) {
      let tmp10 = keyCodeDefault(arg0);
    } else {
      tmp10 = obj132[arg0];
    }
    return tmp10;
  } else {
    if (obj.isLinux()) {
      let MACOS = KeyboardEnvs.LINUX;
    } else {
      let tmpResult = obj1322;
      if (tmpResult.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        tmpResult = obj1322;
        MACOS = tmpResult.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    obj = obj1322;
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
    items = arr.reduce((acc, item, index) => {
      const tmp = closure_1_4(item, 3);
      const tmp4 = (function _codeToKey(items1) {
        [, tmp, tmp2] = items1;
        if (constants.LINUX === tmp2) {
          let tmp5 = table2["" + tmp];
        } else if (constants.MACOS === tmp2) {
          tmp5 = table3["" + tmp];
        } else if (constants.WINDOWS === tmp2) {
          tmp5 = table4["" + tmp];
        } else if (constants.BROWSER === tmp2) {
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
      })(item);
      if (null != tmp4) {
        let tmp8 = getCodeToKeyLanguageCorrection(tmp2, tmp4, tmp3);
      } else {
        let obj = normalizeKey;
        const keyboardEventShapeFromKeycode = obj.getKeyboardEventShapeFromKeycode(tmp2);
        tmp8 = null;
        if (null != keyboardEventShapeFromKeycode) {
          tmp8 = getCodeToKeyLanguageCorrection(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp3);
        }
      }
      closure_0 = tmp8;
      obj = {};
      const merged = Object.assign(closure_0);
      if (null == tmp8) {
        obj = {};
        const merged1 = Object.assign(obj);
        obj.combo = item;
        acc.push(obj);
        return acc;
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
            return acc.map((item, index) => {
              item[closure_0 + "Key"] = true;
              return item;
            });
          }
        }
        const tmp16 = keyToCode(tmp8, KeyboardEnvs.BROWSER);
        if (null != tmp16) {
          obj.keyCode = tmp16;
        }
        acc.push(obj);
        return acc;
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
    const parts = shortcut.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, KEYBOARD_KEY(13175).modKey).split("+");
    const mapped = parts.map((item, index) => item.trim().replace("plus", "+"));
    return mapped.reduce((acc, item, index) => {
      const tmp3 = keyToCode((function toUglyKey(item) {
        const obj = dependencyMap[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp4 = callback(tmp2, 2);
          [str, tmp5] = tmp4;
          if (tmp5 === item.toUpperCase()) {
            let formatted = str.toLowerCase();
            obj.return();
            return formatted;
          }
        }
        return item;
      })(item), closure_0, KEYBOARD_KEY);
      if (null != tmp3) {
        items = [KEYBOARD_KEY, tmp3, closure_0];
        acc.push(items);
      }
      return acc;
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
        MACOS = tmpResult.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
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
  const mapped = arr.map((item, index) => {
    [tmp, tmp2, tmp3] = item;
    if (typeof tmp3 === "number") {
      if (constants.KEYBOARD_KEY !== tmp) {
        if (constants.KEYBOARD_MODIFIER_KEY !== tmp) {
          if (constants.MOUSE_BUTTON === tmp) {
            const _HermesInternal3 = HermesInternal;
            return "mouse" + tmp2;
          } else if (constants.GAMEPAD_BUTTON === tmp) {
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
        } else if (constants.MACOS === tmp2) {
          tmp5 = table3["" + tmp];
        } else if (constants.WINDOWS === tmp2) {
          tmp5 = table4["" + tmp];
        } else if (constants.BROWSER === tmp2) {
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
        const keyboardEventShapeFromKeycode = callback(13174).getKeyboardEventShapeFromKeycode(tmp15);
        combined = null;
        if (null != keyboardEventShapeFromKeycode) {
          combined = callback3(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp16);
        }
        const obj3 = callback(13174);
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
        let tmp25Result = callback(500);
        if (tmp25Result.isMac()) {
          MACOS = constants2.MACOS;
        } else {
          tmp25Result = callback(500);
          MACOS = tmp25Result.isWindows() ? constants2.WINDOWS : constants2.BROWSER;
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
  return arr.length === arg1.length && arr.every((item, index) => {
    [tmp, tmp2, tmp3] = item;
    const tmp4 = closure_1_4(table[index], 3);
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
export const isKeyboardActivatedMouseEvent = function isKeyboardActivatedMouseEvent(nativeEvent) {
  let tmp = null != nativeEvent && typeof nativeEvent === "object";
  if (tmp) {
    tmp = "nativeEvent" in nativeEvent;
  }
  if (tmp) {
    tmp = 0 === nativeEvent.nativeEvent.clientX;
  }
  if (tmp) {
    tmp = 0 === nativeEvent.nativeEvent.clientY;
  }
  return tmp;
};