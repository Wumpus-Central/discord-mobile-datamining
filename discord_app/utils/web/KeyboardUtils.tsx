// discord_app/utils/web/KeyboardUtils.tsx
import GlobalUtils from "../GlobalUtils.tsx";
import keyCodeDefault from "../../../_runtime/13881_keyCode.js";
import KeyboardLayoutMapUtils from "KeyboardLayoutMapUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import KeyboardConstants from "../../../discord_common/js/shared/constants/KeyboardConstants.tsx";
import PlatformUtils_mod from "../PlatformUtils.tsx";
import module_12_mod from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

let LinuxKeyToCode;
let hasOwnProperty;
const f115608 = (item) => {
  let combined;
  let items1;
  let tmp;
  let tmp2;
  let tmp3;
  [tmp, tmp2, tmp3] = item;
  if (typeof tmp3 !== "number") {
    const obj4 = PlatformUtils;
    if (obj4.isLinux()) {
      let MACOS = constants2.LINUX;
    } else {
      const tmp22Result = PlatformUtils;
      if (tmp22Result.isMac()) {
        MACOS = constants2.MACOS;
      } else {
        const tmp22Result2 = PlatformUtils;
        MACOS = tmp22Result2.isWindows() ? constants2.WINDOWS : constants2.BROWSER;
      }
    }
  }
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
    items1 = items;
  } else {
    items1 = [tmp, tmp2];
  }
  _slicedToArray(items1, 3);
  const tmp14 = (function _codeToKey(items1) {
    let tmp;
    let tmp2;
    let tmp5;
    [, tmp, tmp2] = items1;
    if (constants.LINUX === tmp2) {
      tmp5 = closure_1_11["" + tmp];
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
  if (null != tmp14) {
    combined = getCodeToKeyLanguageCorrection(tmp12, tmp14, tmp13);
  } else {
    const obj3 = KeyboardLayoutMapUtils;
    const keyboardEventShapeFromKeycode = obj3.getKeyboardEventShapeFromKeycode(tmp12);
    combined = null;
    if (null != keyboardEventShapeFromKeycode) {
      combined = getCodeToKeyLanguageCorrection(
        keyboardEventShapeFromKeycode.keyCode,
        keyboardEventShapeFromKeycode.key,
        tmp13,
      );
    }
  }
  if (combined == null) {
    const _HermesInternal4 = HermesInternal;
    combined = "UNK" + tmp2;
  }
  return combined;
};
function getCodeToKeyLanguageCorrection(keyCode, key, arg2) {
  if (null != arg2) {
    if (arg2 !== KeyboardEnvs.WINDOWS) {
      return key;
    }
  }
  const BACKTICK_CODES = KeyboardLayoutMapUtils.BACKTICK_CODES;
  if (BACKTICK_CODES.has(keyCode)) {
    const tmp2Result = KeyboardLayoutMapUtils;
    const layoutMap = tmp2Result.getLayoutMap();
    let value = layoutMap.get("Backquote");
    if (key === value) {
      let str7 = "plus";
      if ("+" !== key) {
        str7 = key;
      }
      return str7;
    } else {
      const obj = { key: value, code: "Backquote", keyCode };
      const tmp2Result2 = KeyboardLayoutMapUtils;
      const exactKeyboardEventMatchFromAny = tmp2Result2.getExactKeyboardEventMatchFromAny(obj);
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
  let KEYBOARD_KEY;
  let tmp = BROWSER;
  if (BROWSER === undefined) {
    let MACOS;
    const obj = PlatformUtils;
    if (obj.isLinux()) {
      MACOS = KeyboardEnvs.LINUX;
    } else {
      const tmp2Result = PlatformUtils;
      if (tmp2Result.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        const tmp2Result2 = PlatformUtils;
        MACOS = tmp2Result2.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    tmp = MACOS;
  }
  if (KEYBOARD_KEY === undefined) {
    KEYBOARD_KEY = hasOwnProperty.KEYBOARD_KEY;
  }
  if (tmp === undefined) {
    let MACOS2;
    const obj4 = PlatformUtils;
    if (obj4.isLinux()) {
      MACOS2 = KeyboardEnvs.LINUX;
    } else {
      const tmp8Result = PlatformUtils;
      if (tmp8Result.isMac()) {
        MACOS2 = KeyboardEnvs.MACOS;
      } else {
        const tmp8Result2 = PlatformUtils;
        MACOS2 = tmp8Result2.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    tmp = MACOS2;
  }
  if (KEYBOARD_KEY === undefined) {
    KEYBOARD_KEY = hasOwnProperty.KEYBOARD_KEY;
  }
  let tmp14 = null;
  if (null != codeToKeyLanguageCorrection) {
    let parsed;
    const tmp17 = tmp16 && tmp === KeyboardEnvs.LINUX;
    if (tmp17 === true) {
      parsed = LinuxKeyToCode[codeToKeyLanguageCorrection];
    } else {
      const tmp20 = tmp16 && tmp === KeyboardEnvs.MACOS;
      if (tmp20 === true) {
        parsed = MacosKeyToCode[codeToKeyLanguageCorrection];
      } else {
        const tmp22 = tmp16 && tmp === KeyboardEnvs.WINDOWS;
        if (tmp22 === true) {
          let plus;
          if ("+" === codeToKeyLanguageCorrection) {
            plus = WindowsKeyToCode.plus;
          } else {
            plus = WindowsKeyToCode[codeToKeyLanguageCorrection];
          }
          parsed = plus;
        } else {
          const tmp24 = tmp16 && tmp === KeyboardEnvs.BROWSER;
          if (tmp24 === true) {
            const tmp34 = keyCodeDefault;
            const str8 = codeToKeyLanguageCorrection.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2");
            const replaced = str8.replace("meta", "command");
            let str13 = "pause/break";
            if ("pause" !== replaced) {
              str13 = "pause/break";
              if ("break" !== replaced) {
                str13 = replaced;
              }
            }
            parsed = tmp34(str13);
          } else if (
            (KEYBOARD_KEY === hasOwnProperty.KEYBOARD_KEY || KEYBOARD_KEY === hasOwnProperty.KEYBOARD_MODIFIER_KEY) ===
            true
          ) {
            parsed = obj2[codeToKeyLanguageCorrection];
          } else if ((KEYBOARD_KEY === hasOwnProperty.MOUSE_BUTTON) === true) {
            const _parseInt2 = parseInt;
            parsed = parseInt(codeToKeyLanguageCorrection.replace("MOUSE", ""), 10);
          } else if ((KEYBOARD_KEY === hasOwnProperty.GAMEPAD_BUTTON) === true) {
            const _parseInt = parseInt;
            parsed = parseInt(codeToKeyLanguageCorrection.replace("GAMEPAD", ""), 10);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("Unrecognized DeviceType " + KEYBOARD_KEY + ".");
            throw error;
          }
        }
      }
    }
    tmp14 = null;
    if (null != parsed) {
      tmp14 = parsed;
    }
  }
  if (null != tmp14) {
    return tmp14;
  } else {
    const obj7 = KeyboardLayoutMapUtils;
    const keyboardEventShapeFromKey = obj7.getKeyboardEventShapeFromKey(codeToKeyLanguageCorrection);
    let keyCode = null;
    if (null != keyboardEventShapeFromKey) {
      keyCode = keyboardEventShapeFromKey.keyCode;
    }
    return keyCode;
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
  let tmp5;
  let tmp6;
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
({ KeyboardDeviceTypes: hasOwnProperty, LinuxKeyToCode } = KeyboardConstants);
const MacosKeyToCode = KeyboardConstants.MacosKeyToCode;
const WindowsKeyToCode = KeyboardConstants.WindowsKeyToCode;
const KeyboardEnvs = KeyboardConstants.KeyboardEnvs;
let PlatformUtils = PlatformUtils_mod;
let obj2 = LinuxKeyToCode;
if (!PlatformUtils.isLinux()) {
  const _module2 = PlatformUtils;
  let tmp3 = MacosKeyToCode;
  if (!_module2.isMac()) {
    const _module3 = PlatformUtils;
    let obj = WindowsKeyToCode;
    if (!_module3.isWindows()) {
      obj = {};
    }
    tmp3 = obj;
  }
  obj2 = tmp3;
}
let module_12 = module_12_mod;
const invertResult = module_12.invert(LinuxKeyToCode);
const unpackModuleId = invertResult;
invertResult[223] = "`";
const frozen = Object.freeze(invertResult);
module_12 = module_12_mod;
let closure_12 = freeze(module_12.invert(MacosKeyToCode));
module_12 = module_12_mod;
const invertResult1 = module_12.invert(WindowsKeyToCode);
invertResult1[223] = "`";
const frozen1 = Object.freeze(invertResult1);
module_12 = module_12_mod;
const invert = module_12.invert;
if (obj2 == null) {
  obj2 = {};
}
const invertResult2 = invert(obj2);
PlatformUtils = PlatformUtils_mod;
if (!PlatformUtils.isMac()) {
  invertResult2[223] = "`";
}
function getEnv() {
  let MACOS;
  const obj = PlatformUtils;
  if (obj.isLinux()) {
    MACOS = KeyboardEnvs.LINUX;
  } else {
    const tmpResult = PlatformUtils;
    if (tmpResult.isMac()) {
      MACOS = KeyboardEnvs.MACOS;
    } else {
      const tmpResult2 = PlatformUtils;
      MACOS = tmpResult2.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
    }
  }
  return MACOS;
}
function codeToKey(items1) {
  const tmp = _slicedToArray(items1, 3);
  const tmp4 = (function _codeToKey(items1) {
    let tmp;
    let tmp2;
    let tmp5;
    [, tmp, tmp2] = items1;
    if (constants.LINUX === tmp2) {
      tmp5 = closure_1_11["" + tmp];
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
    return getCodeToKeyLanguageCorrection(tmp[1], tmp4, tmp[2]);
  } else {
    const obj = KeyboardLayoutMapUtils;
    const keyboardEventShapeFromKeycode = obj.getKeyboardEventShapeFromKeycode(tmp2);
    let tmp8 = null;
    if (null != keyboardEventShapeFromKeycode) {
      tmp8 = getCodeToKeyLanguageCorrection(
        keyboardEventShapeFromKeycode.keyCode,
        keyboardEventShapeFromKeycode.key,
        tmp3,
      );
    }
    return tmp8;
  }
}
function toKeyNames(arr) {
  const mapped = arr.map(f115608);
  return mapped.filter(GlobalUtils.isNotNullish);
}
const frozen2 = Object.freeze(invertResult2);
let items = [
  ["META", "\u2318"],
  ["CMD", "\u2318"],
  ["RIGHT META", "RIGHT \u2318"],
  ["RIGHT CMD", "RIGHT \u2318"],
  ["SHIFT", "\u21E7"],
  ["RIGHT SHIFT", "RIGHT \u21E7"],
  ["ALT", "\u2325"],
  ["RIGHT ALT", "RIGHT \u2325"],
  ["CTRL", "\u2303"],
  ["RIGHT CTRL", "RIGHT \u2303"],
  ["ENTER", "\u21B5"],
  ["BACKSPACE", "\u232B"],
  ["DEL", "\u2326"],
  ["ESC", "\u238B"],
  ["PAGEUP", "\u21DE"],
  ["PAGEDOWN", "\u21DF"],
  ["UP", "\u2191"],
  ["DOWN", "\u2193"],
  ["LEFT", "\u2190"],
  ["RIGHT", "\u2192"],
  ["HOME", "\u2196"],
  ["END", "\u2198"],
  ["TAB", "\u21E5"],
  ["SPACE", "\u2423"],
];
const re20 = /shift|meta|ctrl|alt$/;
const result = size.fileFinishedImporting("utils/web/KeyboardUtils.tsx");

export const getRawCodeFromKey = function getRawCodeFromKey(arg0) {
  let tmp8;
  let tmp = arg1;
  if (arg1 === undefined) {
    let MACOS;
    const obj = PlatformUtils;
    if (obj.isLinux()) {
      MACOS = KeyboardEnvs.LINUX;
    } else {
      const tmp2Result = PlatformUtils;
      if (tmp2Result.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        const tmp2Result2 = PlatformUtils;
        MACOS = tmp2Result2.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    tmp = MACOS;
  }
  if (tmp === KeyboardEnvs.BROWSER) {
    tmp8 = keyCodeDefault(arg0);
  } else {
    tmp8 = obj2[arg0];
  }
  return tmp8;
};
export { getCodeToKeyLanguageCorrection };
export { getEnv };
export { codeToKey };
export { keyToCode };
export { getKeyConversionForBrowser };
export const toBrowserEvents = function toBrowserEvents(arr) {
  let closure_0 = { keyCode: 0, key: "", code: "", metaKey: false, shiftKey: false, altKey: false, ctrlKey: false };
  if (null == arr) {
    items = [];
  } else {
    items = arr.reduce((arr, combo) => {
      let tmp2;
      let tmp8;
      [, tmp2] = combo;
      const tmp4 = (function _codeToKey(items1) {
        let tmp;
        let tmp2;
        let tmp5;
        [, tmp, tmp2] = items1;
        if (constants.LINUX === tmp2) {
          tmp5 = closure_1_11["" + tmp];
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
        tmp8 = getCodeToKeyLanguageCorrection(tmp2, tmp4, tmp3);
      } else {
        const obj = KeyboardLayoutMapUtils;
        const keyboardEventShapeFromKeycode = obj.getKeyboardEventShapeFromKeycode(tmp2);
        tmp8 = null;
        if (null != keyboardEventShapeFromKeycode) {
          tmp8 = getCodeToKeyLanguageCorrection(
            keyboardEventShapeFromKeycode.keyCode,
            keyboardEventShapeFromKeycode.key,
            tmp3,
          );
        }
      }
      closure_0 = tmp8;
      obj2 = {};
      const merged = Object.assign(closure_0);
      const tmp11 = closure_0;
      if (null == tmp8) {
        const push = arr.push;
        const obj3 = { combo };
        const merged1 = Object.assign(obj2);
        arr = push(obj3);
        return arr;
      } else {
        if (re20.test(tmp8)) {
          const tmp13 = "meta" === tmp8 || "shift" === tmp8 || "alt" === tmp8 || "ctrl" === tmp8;
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
          obj2.keyCode = tmp16;
        }
        arr.push(obj2);
        return arr;
      }
    }, []);
  }
  return items;
};
export const toCombo = function toCombo(shortcut) {
  let KEYBOARD_KEY;
  let tmp = arg1;
  if (arg1 === undefined) {
    let MACOS;
    const tmp2 = KEYBOARD_KEY;
    let obj = KEYBOARD_KEY(1369);
    if (obj.isLinux()) {
      MACOS = KeyboardEnvs.LINUX;
    } else {
      const tmp2Result = tmp2(1369);
      if (tmp2Result.isMac()) {
        MACOS = KeyboardEnvs.MACOS;
      } else {
        const tmp2Result2 = tmp2(1369);
        MACOS = tmp2Result2.isWindows() ? KeyboardEnvs.WINDOWS : KeyboardEnvs.BROWSER;
      }
    }
    tmp = MACOS;
  }
  MACOS = tmp;
  KEYBOARD_KEY = arg2;
  if (arg2 === undefined) {
    KEYBOARD_KEY = constants.KEYBOARD_KEY;
  }
  let str = shortcut.replace(/numpad plus/i, "");
  const str2 = str.replace(/NUMPAD \+/i, "numpad plus");
  const str3 = str2.replace(/mod/i, KEYBOARD_KEY(13883).modKey);
  const parts = str3.split("+");
  const mapped = parts.map((item) => {
    const str = item.trim();
    return str.replace("plus", "+");
  });
  return mapped.reduce((arr, item) => {
    function toUglyKey(item) {
      let str;
      let tmp5;
      const obj = closure_1_18[Symbol.iterator]();
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
    }
    const tmp3 = keyToCode(toUglyKey(item), MACOS, KEYBOARD_KEY);
    if (null != tmp3) {
      items = [KEYBOARD_KEY, tmp3, MACOS];
      arr = arr.push(items);
    }
    return arr;
  }, []);
};
export { toKeyNames };
export const toString = function toString(arr) {
  let constants2;
  let formatted;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const mapped = arr.map(f115608);
  const found = mapped.filter(GlobalUtils.isNotNullish);
  if (flag) {
    const appVersion = global.navigator.appVersion;
    let mapped1 = found;
    if (-1 !== appVersion.indexOf("Mac OS X")) {
      mapped1 = found.map(toPrettyKey);
    }
    const str4 = mapped1.join(" + ");
    formatted = str4.toUpperCase();
  } else {
    formatted = found.join("+");
  }
  return formatted;
};
export const areKeyCombosEqual = function areKeyCombosEqual(arr, arg1) {
  let closure_0 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp =
    arr.length === arg1.length &&
    arr.every((item, index) => {
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2, tmp3] = item;
      const tmp4 = _slicedToArray(closure_0[index], 3);
      let tmp6 = tmp === tmp4[0];
      const tmp5 = tmp4[2];
      if (tmp6) {
        tmp6 = tmp2 === tmp4[1];
      }
      if (tmp6) {
        let tmp8 = !flag;
        if (flag) {
          tmp8 = tmp3 === tmp5;
        }
        tmp6 = tmp8;
      }
      return tmp6;
    });
  return tmp;
};
export const isKeyboardActivatedMouseEvent = function isKeyboardActivatedMouseEvent(nativeEvent) {
  return (
    null != nativeEvent &&
    typeof nativeEvent === "object" &&
    "nativeEvent" in nativeEvent &&
    0 === nativeEvent.nativeEvent.clientX &&
    0 === nativeEvent.nativeEvent.clientY
  );
};
