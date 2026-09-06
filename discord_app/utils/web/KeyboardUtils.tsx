// === Module 14065: utils/KeyboardUtils ===

// Module 14065 (utils/KeyboardUtils)
import PlatformUtils2 from "PlatformUtils" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import keyCodeDefault from "keyCode" /* 14066 */;
import KeyboardLayoutMapUtils from "KeyboardLayoutMapUtils" /* 14067 */;
import _slicedToArray from "module_32" /* 32 */;
import apply from "module_12" /* 12 */;

require = fn;
function getCodeToKeyLanguageCorrection(keyCode, key, arg2) {
  if (null != arg2) {
    if (arg2 !== KeyboardEnvs.WINDOWS) {
      return key;
    }
  }
  const BACKTICK_CODES = KeyboardLayoutMapUtils.BACKTICK_CODES;
  if (BACKTICK_CODES.has(keyCode)) {
    let tmp2Result = KeyboardLayoutMapUtils;
    const layoutMap = tmp2Result.getLayoutMap();
    value = layoutMap.get("Backquote");
    if (key === value) {
      let str7 = "plus";
      if ("+" !== key) {
        str7 = key;
      }
      return str7;
    } else {
      tmp2Result = KeyboardLayoutMapUtils;
      const obj = { key: value, code: "Backquote", keyCode };
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
function keyToCode(codeToKeyLanguageCorrection) {
  if (BROWSER !== undefined) {
    if (KEYBOARD_KEY === undefined) {
      KEYBOARD_KEY = constants.KEYBOARD_KEY;
    }
    if (BROWSER !== undefined) {
      if (KEYBOARD_KEY === undefined) {
        KEYBOARD_KEY = constants.KEYBOARD_KEY;
      }
      let tmp17 = null;
      if (null != codeToKeyLanguageCorrection) {
        let tmp20 = tmp19;
        if (KEYBOARD_KEY === constants.KEYBOARD_KEY || KEYBOARD_KEY === constants.KEYBOARD_MODIFIER_KEY) {
          tmp20 = BROWSER === KeyboardEnvs.LINUX;
        }
        if (tmp20 === true) {
          let parsed = LinuxKeyToCode[codeToKeyLanguageCorrection];
        } else {
          let tmp23 = tmp19;
          if (tmp19) {
            tmp23 = BROWSER === KeyboardEnvs.MACOS;
          }
          if (tmp23 === true) {
            parsed = MacosKeyToCode[codeToKeyLanguageCorrection];
          } else {
            let tmp25 = tmp19;
            if (tmp19) {
              tmp25 = BROWSER === KeyboardEnvs.WINDOWS;
            }
            if (tmp25 === true) {
              if ("+" === codeToKeyLanguageCorrection) {
                let plus = WindowsKeyToCode.plus;
              } else {
                plus = WindowsKeyToCode[codeToKeyLanguageCorrection];
              }
              parsed = plus;
            } else {
              let tmp27 = tmp19;
              if (tmp19) {
                tmp27 = BROWSER === KeyboardEnvs.BROWSER;
              }
              if (tmp27 === true) {
                const tmp39 = keyCodeDefault;
                const replaced = codeToKeyLanguageCorrection.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command");
                let str13 = "pause/break";
                if ("pause" !== replaced) {
                  str13 = "pause/break";
                  if ("break" !== replaced) {
                    str13 = replaced;
                  }
                }
                parsed = tmp39(str13);
                const str8 = codeToKeyLanguageCorrection.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2");
              } else if (tmp19 === true) {
                parsed = PlatformUtils[codeToKeyLanguageCorrection];
              } else if (KEYBOARD_KEY === constants.MOUSE_BUTTON === true) {
                const _parseInt2 = parseInt;
                parsed = parseInt(codeToKeyLanguageCorrection.replace("MOUSE", ""), 10);
              } else if (KEYBOARD_KEY === constants.GAMEPAD_BUTTON === true) {
                const _parseInt = parseInt;
                parsed = parseInt(codeToKeyLanguageCorrection.replace("GAMEPAD", ""), 10);
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error = new Error("Unrecognized DeviceType " + KEYBOARD_KEY + ".");
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
        const keyboardEventShapeFromKey = KeyboardLayoutMapUtils.getKeyboardEventShapeFromKey(codeToKeyLanguageCorrection);
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
        let tmp8Result = PlatformUtils2;
        if (tmp8Result.isMac()) {
          MACOS2 = KeyboardEnvs.MACOS;
        } else {
          tmp8Result = PlatformUtils2;
          MACOS2 = tmp8Result.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
        }
      }
      obj4 = PlatformUtils2;
    }
  } else {
    if (obj.isLinux()) {
      let MACOS = KeyboardEnvs.LINUX;
    } else {
      let tmpResult = PlatformUtils2;
      if (tmpResult.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        tmpResult = PlatformUtils2;
        MACOS = tmpResult.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    obj = PlatformUtils2;
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
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp6] = tmp4;
    if (tmp5 === str.toUpperCase()) {
      obj.return();
      return tmp6;
    }
  }
  return str;
}
const KeyboardConstants = fn(7504);
({ KeyboardDeviceTypes: hasOwnProperty, LinuxKeyToCode } = KeyboardConstants);
const MacosKeyToCode = KeyboardConstants.MacosKeyToCode;
const WindowsKeyToCode = KeyboardConstants.WindowsKeyToCode;
const KeyboardEnvs = KeyboardConstants.KeyboardEnvs;
fn(1115);
let PlatformUtils = LinuxKeyToCode;
if (!PlatformUtils.isLinux()) {
  let tmp3 = MacosKeyToCode;
  if (!obj3.isMac()) {
    PlatformUtils = WindowsKeyToCode;
    if (!obj4.isWindows()) {
      PlatformUtils = {};
    }
    tmp3 = PlatformUtils;
    obj4 = fn(1115);
  }
  PlatformUtils = tmp3;
  obj3 = fn(1115);
}
const invertResult = apply.invert(LinuxKeyToCode);
invertResult[223] = "`";
const frozen = Object.freeze(invertResult);
let closure_12 = Object.freeze(apply.invert(MacosKeyToCode));
const invertResult1 = apply.invert(WindowsKeyToCode);
invertResult1[223] = "`";
const frozen1 = Object.freeze(invertResult1);
if (PlatformUtils == null) {
  PlatformUtils = {};
}
apply.invert(PlatformUtils);
PlatformUtils = fn(1115);
if (!PlatformUtils.isMac()) {
  PlatformUtils[223] = "`";
}
function getEnv() {
  if (obj.isLinux()) {
    let MACOS = KeyboardEnvs.LINUX;
  } else {
    let tmpResult = PlatformUtils2;
    if (tmpResult.isMac()) {
      MACOS = KeyboardEnvs.MACOS;
    } else {
      tmpResult = PlatformUtils2;
      MACOS = tmpResult.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
    }
  }
  return MACOS;
}
function codeToKey(items1) {
  const tmp = _slicedToArray(items1, 3);
  const tmp4 = (function _codeToKey(items1) {
    [, tmp, tmp2] = items1;
    if (constants.LINUX === tmp2) {
      let tmp5 = closure_1_11["" + tmp];
    } else if (constants.MACOS === tmp2) {
      tmp5 = closure_1_12["" + tmp];
    } else if (constants.WINDOWS === tmp2) {
      tmp5 = closure_1_13["" + tmp];
    } else if (constants.BROWSER === tmp2) {
      const tmp8 = closure_1_2(closure_1_3[4])(tmp);
      if (null == tmp8) {
        return null;
      } else {
        tmp5 = closure_1_17(tmp8);
      }
    } else {
      tmp5 = closure_1_14["" + tmp];
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
    const keyboardEventShapeFromKeycode = KeyboardLayoutMapUtils.getKeyboardEventShapeFromKeycode(tmp2);
    let tmp8 = null;
    if (null != keyboardEventShapeFromKeycode) {
      tmp8 = getCodeToKeyLanguageCorrection(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp3);
    }
    return tmp8;
  }
}
function toKeyNames(arr) {
  const mapped = arr.map((item) => {
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
      const tmp14 = _slicedToArray(items1, 3);
      const tmp17 = (function _codeToKey(items1) {
        [, tmp, tmp2] = items1;
        if (constants.LINUX === tmp2) {
          let tmp5 = closure_1_11["" + tmp];
        } else if (constants.MACOS === tmp2) {
          tmp5 = closure_1_12["" + tmp];
        } else if (constants.WINDOWS === tmp2) {
          tmp5 = closure_1_13["" + tmp];
        } else if (constants.BROWSER === tmp2) {
          const tmp8 = closure_1_2(closure_1_3[4])(tmp);
          if (null == tmp8) {
            return null;
          } else {
            tmp5 = closure_1_17(tmp8);
          }
        } else {
          tmp5 = closure_1_14["" + tmp];
        }
        let tmp14 = null;
        if (null != tmp5) {
          tmp14 = tmp5;
        }
        return tmp14;
      })(items1);
      if (null != tmp17) {
        let combined = getCodeToKeyLanguageCorrection(tmp15, tmp17, tmp16);
      } else {
        const keyboardEventShapeFromKeycode = KeyboardLayoutMapUtils.getKeyboardEventShapeFromKeycode(tmp15);
        combined = null;
        if (null != keyboardEventShapeFromKeycode) {
          combined = getCodeToKeyLanguageCorrection(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp16);
        }
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
        let tmp25Result = PlatformUtils2;
        if (tmp25Result.isMac()) {
          MACOS = constants2.MACOS;
        } else {
          tmp25Result = PlatformUtils2;
          MACOS = tmp25Result.isWindows() ? constants2.WINDOWS : constants2.BROWSER;
        }
      }
      obj4 = PlatformUtils2;
    }
  });
  return mapped.filter(GlobalUtils.isNotNullish);
}
PlatformUtils = Object.freeze(PlatformUtils);
let items = [["META", "\u2318"], ["CMD", "\u2318"], ["RIGHT META", "RIGHT \u2318"], ["RIGHT CMD", "RIGHT \u2318"], ["SHIFT", "\u21E7"], ["RIGHT SHIFT", "RIGHT \u21E7"], ["ALT", "\u2325"], ["RIGHT ALT", "RIGHT \u2325"], ["CTRL", "\u2303"], ["RIGHT CTRL", "RIGHT \u2303"], ["ENTER", "\u21B5"], ["BACKSPACE", "\u232B"], ["DEL", "\u2326"], ["ESC", "\u238B"], ["PAGEUP", "\u21DE"], ["PAGEDOWN", "\u21DF"], ["UP", "\u2191"], ["DOWN", "\u2193"], ["LEFT", "\u2190"], ["RIGHT", "\u2192"], ["HOME", "\u2196"], ["END", "\u2198"], ["TAB", "\u21E5"], ["SPACE", "\u2423"]];
const re20 = /shift|meta|ctrl|alt$/;
const size = fn(2);
const result = size.fileFinishedImporting("utils/web/KeyboardUtils.tsx");

export const getRawCodeFromKey = function getRawCodeFromKey(arg0) {
  if (arg1 !== undefined) {
    if (arg1 === KeyboardEnvs.BROWSER) {
      let tmp10 = keyCodeDefault(arg0);
    } else {
      tmp10 = PlatformUtils[arg0];
    }
    return tmp10;
  } else {
    if (obj.isLinux()) {
      let MACOS = KeyboardEnvs.LINUX;
    } else {
      let tmpResult = PlatformUtils2;
      if (tmpResult.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        tmpResult = PlatformUtils2;
        MACOS = tmpResult.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    obj = PlatformUtils2;
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
      const tmp = _slicedToArray(combo, 3);
      const tmp4 = (function _codeToKey(items1) {
        [, tmp, tmp2] = items1;
        if (constants.LINUX === tmp2) {
          let tmp5 = closure_1_11["" + tmp];
        } else if (constants.MACOS === tmp2) {
          tmp5 = closure_1_12["" + tmp];
        } else if (constants.WINDOWS === tmp2) {
          tmp5 = closure_1_13["" + tmp];
        } else if (constants.BROWSER === tmp2) {
          const tmp8 = closure_1_2(closure_1_3[4])(tmp);
          if (null == tmp8) {
            return null;
          } else {
            tmp5 = closure_1_17(tmp8);
          }
        } else {
          tmp5 = closure_1_14["" + tmp];
        }
        let tmp14 = null;
        if (null != tmp5) {
          tmp14 = tmp5;
        }
        return tmp14;
      })(combo);
      if (null != tmp4) {
        let tmp8 = getCodeToKeyLanguageCorrection(tmp2, tmp4, tmp3);
      } else {
        let obj = KeyboardLayoutMapUtils;
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
        obj.combo = combo;
        arr = arr.push(obj);
        return arr;
      } else {
        if (re20.test(tmp8)) {
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
            return arr.map((item) => {
              item[closure_0 + "Key"] = true;
              return item;
            });
          }
        }
        const tmp16 = keyToCode(tmp8, KeyboardEnvs.BROWSER);
        if (null != tmp16) {
          obj.keyCode = tmp16;
        }
        arr = arr.push(obj);
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
    const parts = shortcut.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, KEYBOARD_KEY(14068).modKey).split("+");
    const mapped = parts.map((item) => item.trim().replace("plus", "+"));
    return mapped.reduce((arr, item) => {
      const tmp3 = keyToCode((function toUglyKey(item) {
        const obj = dependencyMap[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp4 = closure_1_4(tmp2, 2);
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
        arr = arr.push(items);
      }
      return arr;
    }, []);
  } else {
    if (obj.isLinux()) {
      let MACOS = KeyboardEnvs.LINUX;
    } else {
      let tmpResult = tmp(1115);
      if (tmpResult.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        tmpResult = tmp(1115);
        MACOS = tmpResult.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    obj = KEYBOARD_KEY(1115);
  }
};
export { toKeyNames };
export const toString = function toString(arr) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const mapped = arr.map((item) => {
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
      const tmp14 = _slicedToArray(items1, 3);
      const tmp17 = (function _codeToKey(items1) {
        [, tmp, tmp2] = items1;
        if (constants.LINUX === tmp2) {
          let tmp5 = closure_1_11["" + tmp];
        } else if (constants.MACOS === tmp2) {
          tmp5 = closure_1_12["" + tmp];
        } else if (constants.WINDOWS === tmp2) {
          tmp5 = closure_1_13["" + tmp];
        } else if (constants.BROWSER === tmp2) {
          const tmp8 = closure_1_2(closure_1_3[4])(tmp);
          if (null == tmp8) {
            return null;
          } else {
            tmp5 = closure_1_17(tmp8);
          }
        } else {
          tmp5 = closure_1_14["" + tmp];
        }
        let tmp14 = null;
        if (null != tmp5) {
          tmp14 = tmp5;
        }
        return tmp14;
      })(items1);
      if (null != tmp17) {
        let combined = getCodeToKeyLanguageCorrection(tmp15, tmp17, tmp16);
      } else {
        const keyboardEventShapeFromKeycode = KeyboardLayoutMapUtils.getKeyboardEventShapeFromKeycode(tmp15);
        combined = null;
        if (null != keyboardEventShapeFromKeycode) {
          combined = getCodeToKeyLanguageCorrection(keyboardEventShapeFromKeycode.keyCode, keyboardEventShapeFromKeycode.key, tmp16);
        }
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
        let tmp25Result = PlatformUtils2;
        if (tmp25Result.isMac()) {
          MACOS = constants2.MACOS;
        } else {
          tmp25Result = PlatformUtils2;
          MACOS = tmp25Result.isWindows() ? constants2.WINDOWS : constants2.BROWSER;
        }
      }
      obj4 = PlatformUtils2;
    }
  });
  const found = mapped.filter(GlobalUtils.isNotNullish);
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
export const areKeyCombosEqual = function areKeyCombosEqual(arr, arg1) {
  closure_0 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  return arr.length === arg1.length && arr.every((item, index) => {
    [tmp, tmp2, tmp3] = item;
    const tmp4 = _slicedToArray(closure_0[index], 3);
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