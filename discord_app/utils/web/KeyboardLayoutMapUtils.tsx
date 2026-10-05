// discord_app/utils/web/KeyboardLayoutMapUtils.tsx
import LoggerDefault from "../../modules/debug/Logger.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import keyCodeDefault from "../../../_runtime/13881_keyCode.js";
import _slicedToArray_mod from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import DeveloperOptionsStore from "../../stores/DeveloperOptionsStore.tsx";
import KeyboardConstants from "../../../discord_common/js/shared/constants/KeyboardConstants.tsx";
import PlatformUtils from "../PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c1, c2, c4, c5;

let LinuxKeyToCode;
let MacosKeyToCode;
let WindowsKeyToCode;
const f115615 = (item) => {
  let tmp;
  [tmp, obj] = item;
  const items = [tmp];
  let toLocaleLowerCaseResult = obj;
  if (null != obj) {
    toLocaleLowerCaseResult = obj.toLocaleLowerCase();
  }
  items[1] = toLocaleLowerCaseResult;
  return items;
};
function normalizeKey(toLocaleLowerCase) {
  let toLocaleLowerCaseResult = toLocaleLowerCase;
  if (null != toLocaleLowerCase) {
    toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
  }
  return toLocaleLowerCaseResult;
}
function syncKeyboardLayoutMap() {
  return obj(...arguments);
}
let obj = function _syncKeyboardLayoutMap() {
  obj = _asyncToGenerator(async function () {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            const _navigator2 = navigator;
            const keyboard2 = navigator.keyboard;
            let getLayoutMap;
            if (keyboard2 != null) {
              getLayoutMap = keyboard2.getLayoutMap;
            }
            if (null != getLayoutMap) {
              c3 = 1;
              const _navigator = navigator;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: keyboard.getLayoutMap(), done: false };
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const self2 = this;
          let closure_10 = new closure_129_9();
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          const _Object = Object;
          const self = this;
          closure_10 = new closure_129_9(Object.fromEntries(closure_0.entries()));
          c3 = 0;
          c5 = 3;
          return { value: true, done: true };
        }
        c5 = 3;
        return { value: false, done: true };
      } catch (tmp13) {
        let closure_2 = tmp13;
        if (0 === c3) {
          c5 = 3;
          throw tmp13;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function normalizeKeyMap(arg0) {
  set = new Set();
  obj = {};
  const entries = Object.entries(arg0);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let tmp6 = tmp5[1];
    let tmp8 = normalizeKey(tmp5[0]);
    let tmp9 = tmp8;
    if (set.has(tmp8)) {
      if (null != obj[tmp9]) {
        if (obj[tmp9] !== tmp6) {
          let _HermesInternal = HermesInternal;
          let errorResult = logger.error("Seperate keyCode mappings found for: " + tmp9);
          continue;
        }
      }
    }
    let addResult = set.add(tmp9);
    obj[tmp9] = tmp6;
  }
  return obj;
}
function getNormalizedEvent(keyCode) {
  let tmp;
  obj = { keyCode: keyCode.keyCode, key: tmp, code: keyCode.code };
  tmp = undefined;
  if (null != keyCode.key) {
    let toLocaleLowerCaseResult = key;
    if (null != keyCode.key) {
      toLocaleLowerCaseResult = key.toLocaleLowerCase();
    }
    tmp = toLocaleLowerCaseResult;
  }
  return obj;
}
function getKeyboardMapper() {
  let promise;
  let tmp;
  if (null == c17) {
    tmp = null;
    if (null == promise) {
      let closure_0 = _asyncToGenerator(async function (arg0) {
        closure_0 = arg0;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp4;
                let closure_1 = tmp;
                c3 = 1;
                c4 = 1;
                const obj4 = { value: syncKeyboardLayoutMap(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const self = this;
              let closure_17 = new KeyboardMapper(LinuxKeyToCode);
              const _document = document;
              const str = "keydown";
              const listener = document.addEventListener("keydown", (event) => {
                try {
                  if (closure_1_17 != null) {
                    closure_1_17.addEvent(event);
                  }
                } catch (tmp3) {
                  const obj2 = { event, error: tmp3 };
                  logger.error("KeyboardMapper - Error adding event", obj2);
                }
              });
              closure_0();
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp15) {
            c4 = 3;
            throw tmp15;
          }
        }
      });
      const self = this;
      const self2 = this;
      tmp = null;
      promise = new Promise(function () {
        return closure_0(...arguments);
      });
    }
  } else {
    tmp = c17;
  }
  return tmp;
}
obj = function _resetKeyboardMapper() {
  obj = _asyncToGenerator(async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp3;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: syncKeyboardLayoutMap(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          obj = closure_128_19();
          if (obj != null) {
            obj.reset();
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
function reverseLookupCodeFromKey(toLocaleLowerCase) {
  let promise;
  let tmp;
  if (null != toLocaleLowerCase) {
    let toLocaleLowerCaseResult = toLocaleLowerCase;
    if (null != toLocaleLowerCase) {
      toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
    }
    tmp = toLocaleLowerCaseResult;
  }
  if (null != tmp) {
    let tmp4;
    if (null == c17) {
      tmp4 = null;
      if (null == promise) {
        let closure_0 = _asyncToGenerator(async function (arg0) {
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp4;
                  let closure_1 = tmp;
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: syncKeyboardLayoutMap(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const self = this;
                let closure_17 = new KeyboardMapper(LinuxKeyToCode);
                const _document = document;
                const str = "keydown";
                const listener = document.addEventListener("keydown", (event) => {
                  try {
                    if (closure_1_17 != null) {
                      closure_1_17.addEvent(event);
                    }
                  } catch (tmp3) {
                    const obj2 = { event, error: tmp3 };
                    logger.error("KeyboardMapper - Error adding event", obj2);
                  }
                });
                closure_0();
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c4 = 3;
              throw tmp15;
            }
          }
        });
        const self = this;
        const self2 = this;
        tmp4 = null;
        promise = new Promise(function () {
          return closure_0(...arguments);
        });
      }
    } else {
      tmp4 = c17;
    }
    let result;
    if (tmp4 != null) {
      result = tmp4.findCodeFromKeyboardLayoutMap(tmp);
    }
    return result;
  }
}
function getExactKeyboardEventMatchFromAny(keyCode) {
  let promise;
  let tmp;
  keyCode = keyCode.keyCode;
  if (null != keyCode.key) {
    let toLocaleLowerCaseResult = key;
    if (null != keyCode.key) {
      toLocaleLowerCaseResult = key.toLocaleLowerCase();
    }
    tmp = toLocaleLowerCaseResult;
  }
  let tmp4 = null;
  if (null != tmp) {
    let tmp6;
    if (null == c17) {
      tmp6 = null;
      if (null == promise) {
        let closure_0 = _asyncToGenerator(async function (arg0) {
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp4;
                  let closure_1 = tmp;
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: syncKeyboardLayoutMap(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const self = this;
                let closure_17 = new KeyboardMapper(LinuxKeyToCode);
                const _document = document;
                const str = "keydown";
                const listener = document.addEventListener("keydown", (event) => {
                  try {
                    if (closure_1_17 != null) {
                      closure_1_17.addEvent(event);
                    }
                  } catch (tmp3) {
                    const obj2 = { event, error: tmp3 };
                    logger.error("KeyboardMapper - Error adding event", obj2);
                  }
                });
                closure_0();
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c4 = 3;
              throw tmp15;
            }
          }
        });
        const self = this;
        const self2 = this;
        tmp6 = null;
        promise = new Promise(function () {
          return closure_0(...arguments);
        });
      }
    } else {
      tmp6 = c17;
    }
    let result;
    if (tmp6 != null) {
      result = tmp6.findExactKeyboardEventMatch(tmp, tmp3, keyCode);
    }
    if (result == null) {
      result = null;
    }
    tmp4 = result;
  }
  return tmp4;
}
let _slicedToArray = _slicedToArray_mod;
({ LinuxKeyToCode, MacosKeyToCode, WindowsKeyToCode } = KeyboardConstants);
let tmp3 = new LoggerDefault("KeyboardLayoutMapUtils");
const hasOwnProperty = tmp3;
if (!PlatformUtils.isLinux()) {
  const _module2 = PlatformUtils;
  if (!_module2.isMac()) {
    const _module3 = PlatformUtils;
    if (!_module3.isWindows()) {
      WindowsKeyToCode = keyCodeDefault.codes;
    }
    MacosKeyToCode = WindowsKeyToCode;
  }
  LinuxKeyToCode = MacosKeyToCode;
}
function initializeKeyboardMapper() {
  let promise;
  if (null == promise) {
    let closure_0 = _asyncToGenerator(async function (arg0) {
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp4;
              let closure_1 = tmp;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: syncKeyboardLayoutMap(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const self = this;
            let closure_17 = new KeyboardMapper(LinuxKeyToCode);
            const _document = document;
            const str = "keydown";
            const listener = document.addEventListener("keydown", (event) => {
              try {
                if (closure_1_17 != null) {
                  closure_1_17.addEvent(event);
                }
              } catch (tmp3) {
                const obj2 = { event, error: tmp3 };
                logger.error("KeyboardMapper - Error adding event", obj2);
              }
            });
            closure_0();
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c4 = 3;
          throw tmp15;
        }
      }
    });
    const self = this;
    const self2 = this;
    promise = new Promise(function () {
      return closure_0(...arguments);
    });
  }
  return promise;
}
let set = new Set([192, 220, 222, 223, 229]);
const frozen = Object.freeze({
  KeyA: "a",
  KeyB: "b",
  KeyC: "c",
  KeyD: "d",
  KeyE: "e",
  KeyF: "f",
  KeyG: "g",
  KeyH: "h",
  KeyI: "i",
  KeyJ: "j",
  KeyK: "k",
  KeyL: "l",
  KeyM: "m",
  KeyN: "n",
  KeyO: "o",
  KeyP: "p",
  KeyQ: "q",
  KeyR: "r",
  KeyS: "s",
  KeyT: "t",
  KeyU: "u",
  KeyV: "v",
  KeyW: "w",
  KeyX: "x",
  KeyY: "y",
  KeyZ: "z",
  Digit0: "0",
  Digit1: "1",
  Digit2: "2",
  Digit3: "3",
  Digit4: "4",
  Digit5: "5",
  Digit6: "6",
  Digit7: "7",
  Digit8: "8",
  Digit9: "9",
  Backquote: "`",
  Backslash: "\\",
  Quote: "'",
  Slash: "/",
  Comma: ",",
  Period: ".",
  Semicolon: ";",
  Equal: "=",
  Minus: "-",
  BracketLeft: "[",
  BracketRight: "]",
  IntlBackslash: "\u00A7",
});
class DiscordKeyboardLayoutMap {
  constructor() {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = frozen;
    }
    obj = Object.create(new.target.prototype);
    const entries = Object.entries(tmp);
    obj.map = new Map(entries.map(f115615));
    new Map(entries.map(f115615));
    return obj;
  }
  get(arg0) {
    map = this.map;
    return map.get(arg0);
  }
  has(arg0) {
    map = this.map;
    return map.has(arg0);
  }
  keys() {
    map = this.map;
    return map.keys();
  }
  values() {
    map = this.map;
    return map.values();
  }
  entries() {
    map = this.map;
    return map.entries();
  }
  forEach(arg0, arg1) {
    map = this.map;
    return map.forEach(arg0, arg1);
  }
  _set(arg0, arg1) {
    map = this.map;
    const result = map.set(arg0, arg1);
  }
}
Object.defineProperty(DiscordKeyboardLayoutMap.prototype, "size", {
  get: function size() {
    return this.map.size;
  },
  set: undefined,
});
obj = Object.create(DiscordKeyboardLayoutMap.prototype);
let entries = Object.entries(frozen);
let map = new Map(entries.map(f115615));
obj.map = map;
let c15 = "keyboard-layout-map";
class BaseKeyboardMapper {
  constructor() {
    obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const merged = Object.assign({
      _internalKeyLayoutMap: null,
      _cachedKeyCodeMapEntries: null,
      _cachedKeyMapEntries: null,
      _cachedKeyLayoutMapEntries: null,
      _cachedAllEvents: null,
    });
    merged[1] = [];
    merged[2] = [];
    merged[3] = [];
    merged[4] = [];
    merged._defaultKeyMap = obj;
    const Storage = Storage2.Storage;
    let value = Storage.get(c15);
    if (value == null) {
      value = null;
    }
    if (null == value) {
      const obj2 = {};
      const merged1 = Object.assign(obj);
      value = normalizeKeyMap(obj2);
    }
    merged.keyMap = value;
    const result = merged._initializeInternalLayoutMap();
    merged.keyCodeMap = merged._buildKeyCodeMapFromKeyMap();
    merged.updateCaches();
    merged.save();
    return merged;
  }
  _setCachedKeyCodeMapEntries() {
    const entries = Object.entries(this.keyCodeMap);
    this._cachedKeyCodeMapEntries = entries.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const items = [Number(tmp), tmp2];
      return items;
    });
    const _cachedKeyCodeMapEntries = this._cachedKeyCodeMapEntries;
    this._cachedAllEvents = _cachedKeyCodeMapEntries.flatMap((item) => {
      let tmp;
      [, tmp] = item;
      return tmp;
    });
  }
  _setCachedKeyMapEntries() {
    this._cachedKeyMapEntries = Object.entries(this.keyMap);
  }
  _setCachedKeyLayoutMapEntries() {
    const layoutMap = this.getLayoutMap();
    this._cachedKeyLayoutMapEntries = from(layoutMap.entries());
  }
  getKeyCodeMapItem(keyCode) {
    const self = this;
    if (null == this.keyCodeMap[keyCode]) {
      self.keyCodeMap[keyCode] = [];
    }
    return self.keyCodeMap[keyCode];
  }
  _buildKeyCodeMapFromKeyMap() {
    let tmp6;
    let tmp7;
    const self = this;
    obj = {};
    const entries = Object.entries(this.keyMap);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      let items = obj[tmp7];
      if (items == null) {
        items = [];
      }
      obj[tmp7] = items;
      let arr2 = obj[tmp7];
      let obj2 = { keyCode: tmp7, key: tmp6, code: self.findCodeFromKeyboardLayoutMap(tmp6, true) };
      let push = arr2.push;
      let arr = push(obj2);
      continue;
    }
    return obj;
  }
  _initializeInternalLayoutMap() {
    this._internalKeyLayoutMap = new Map(Array.from(obj.entries()));
    new Map(Array.from(obj.entries()));
    const result = this._setCachedKeyLayoutMapEntries();
  }
  _hasExactMatch(keyCode) {
    if (null == keyCode.keyCode) {
      return false;
    } else {
      const self = this;
      const tmp =
        null != this.keyCodeMap[keyCode.keyCode] &&
        this.keyCodeMap[keyCode.keyCode].some(
          (key) => key.key === keyCode.key && key.code === keyCode.code && key.keyCode === keyCode.keyCode,
        );
      return tmp;
    }
  }
  addEvent(keyCode) {
    let tmp;
    obj = { keyCode: keyCode.keyCode, key: tmp, code: keyCode.code };
    tmp = undefined;
    if (null != keyCode.key) {
      let toLocaleLowerCaseResult = key;
      if (null != keyCode.key) {
        toLocaleLowerCaseResult = key.toLocaleLowerCase();
      }
      tmp = toLocaleLowerCaseResult;
    }
    const self = this;
    if (null == this._internalKeyLayoutMap) {
      const result = self._initializeInternalLayoutMap();
    }
    if (!self._hasExactMatch(obj)) {
      const tmp4 = null != obj.key && "dead" !== obj.key;
      if (tmp4) {
        if (null == self.keyMap[obj.key]) {
          self.keyMap[obj.key] = obj.keyCode;
        } else {
          const logKeyboardMismatches =
            self.keyMap[obj.key] !== obj.keyCode && DeveloperOptionsStore.logKeyboardMismatches;
          if (logKeyboardMismatches) {
            const _HermesInternal = HermesInternal;
            logger.error(
              "KeyboardMapper - Key code mismatch for key " +
                obj.key +
                ": " +
                self.keyMap[obj.key] +
                " !== " +
                obj.keyCode,
            );
          }
        }
        let items = self.keyCodeMap[obj.keyCode];
        const keyCodeMap = self.keyCodeMap;
        keyCode = obj.keyCode;
        if (items == null) {
          items = [];
        }
        keyCodeMap[keyCode] = items;
        const arr2 = self.keyCodeMap[obj.keyCode];
        arr2.push(obj);
        const _internalKeyLayoutMap = self._internalKeyLayoutMap;
        if (_internalKeyLayoutMap != null) {
          const result1 = _internalKeyLayoutMap.set(obj.code, obj.key);
        }
        self.updateCaches();
      }
    }
  }
  updateCaches() {
    const result = this._setCachedKeyCodeMapEntries();
    const result1 = this._setCachedKeyMapEntries();
    const result2 = this._setCachedKeyLayoutMapEntries();
  }
  reset() {
    this._internalKeyLayoutMap = null;
    obj = {};
    const merged = Object.assign(this._defaultKeyMap);
    this.keyMap = normalizeKeyMap(obj);
    const result = this._initializeInternalLayoutMap();
    this.keyCodeMap = this._buildKeyCodeMapFromKeyMap();
    this.updateCaches();
    this.save();
  }
  save() {
    const keyMap = this.keyMap;
    const Storage = Storage2.Storage;
    const result = Storage.set(c15, keyMap);
  }
  getLayoutMap() {
    return null == this._internalKeyLayoutMap ? obj : this._internalKeyLayoutMap;
  }
  getKeyCode(arg0) {
    return this.keyMap[arg0];
  }
  findCodeFromKeyboardLayoutMap(toLocaleLowerCaseResult, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let c0;
    let prop = this.cachedKeyLayoutMapEntries;
    if (flag) {
      const tmp = globalThis;
      const _Array = Array;
      prop = Array.from(obj.entries());
    }
    if (null != toLocaleLowerCaseResult) {
      toLocaleLowerCaseResult = toLocaleLowerCaseResult.toLocaleLowerCase();
    }
    c0 = toLocaleLowerCaseResult;
    const found = prop.find((item) => {
      let tmp;
      [, tmp] = item;
      return tmp === c0;
    });
    let first;
    if (found != null) {
      first = found[0];
    }
    if (first == null) {
      first = toLocaleLowerCaseResult;
    }
    return first;
  }
}
const prototype = BaseKeyboardMapper.prototype;
Object.defineProperty(prototype, "cachedKeyCodeMapEntries", {
  get: function cachedKeyCodeMapEntries() {
    const self = this;
    if (0 === this._cachedKeyCodeMapEntries.length) {
      const result = self._setCachedKeyCodeMapEntries();
    }
    return self._cachedKeyCodeMapEntries;
  },
  set: undefined,
});
Object.defineProperty(prototype, "cachedKeyMapEntries", {
  get: function cachedKeyMapEntries() {
    const self = this;
    if (0 === this._cachedKeyMapEntries.length) {
      const result = self._setCachedKeyMapEntries();
    }
    return self._cachedKeyMapEntries;
  },
  set: undefined,
});
Object.defineProperty(prototype, "cachedKeyLayoutMapEntries", {
  get: function cachedKeyLayoutMapEntries() {
    const self = this;
    if (0 === this._cachedKeyLayoutMapEntries.length) {
      const result = self._setCachedKeyLayoutMapEntries();
    }
    return self._cachedKeyLayoutMapEntries;
  },
  set: undefined,
});
Object.defineProperty(prototype, "cachedAllEvents", {
  get: function cachedAllEvents() {
    const self = this;
    if (0 === this._cachedAllEvents.length) {
      const result = self._setCachedKeyCodeMapEntries();
    }
    return self._cachedAllEvents;
  },
  set: undefined,
});
class KeyboardMapper extends BaseKeyboardMapper {
  getKeyString(keyCode, code) {
    const self = this;
    let closure_1 = keyCode;
    let closure_0 = code;
    let keyCodeMapItem = this.getKeyCodeMapItem(keyCode);
    if (0 === keyCodeMapItem.length) {
      const cachedKeyMapEntries = this.cachedKeyMapEntries;
      const found = cachedKeyMapEntries.filter((item) => {
        let tmp;
        [, tmp] = item;
        return tmp == tmp;
      });
      keyCodeMapItem = found.map((item) => {
        let result;
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        obj = { key: tmp, keyCode: tmp2, code: result };
        result = code;
        if (code == null) {
          result = self.findCodeFromKeyboardLayoutMap(tmp);
        }
        return obj;
      });
    }
    const found1 = keyCodeMapItem.find((keyCode) => {
      let tmp3 = tmp;
      if (null != code) {
        tmp3 = keyCode.keyCode === closure_1 && keyCode.code === tmp2;
      }
      return tmp3;
    });
    let key;
    if (found1 != null) {
      key = found1.key;
    }
    return key;
  }
  findExactKeyboardEventMatch(toLocaleLowerCaseResult, arg1, keyCode) {
    let tmp = arg1;
    let closure_0 = arg1;
    let closure_1 = keyCode;
    if (null != toLocaleLowerCaseResult) {
      toLocaleLowerCaseResult = toLocaleLowerCaseResult.toLocaleLowerCase();
    }
    const self = this;
    _slicedToArray = toLocaleLowerCaseResult;
    if (null == tmp) {
      const result = self.findCodeFromKeyboardLayoutMap(toLocaleLowerCaseResult);
      closure_0 = result;
      tmp = result;
    }
    if (null != keyCode) {
      if (null != self.keyCodeMap[keyCode]) {
        const found = arr.find((key) => {
          _slicedToArray = key;
          if (null != key.key) {
            _slicedToArray = key.toLocaleLowerCase();
          }
          return _slicedToArray === _slicedToArray && key.code === closure_0;
        });
        if (null != found) {
          return found;
        }
      }
    }
    if (null != keyCode) {
      if (null != tmp) {
        const cachedAllEvents = self.cachedAllEvents;
        return cachedAllEvents.find((key) => {
          _slicedToArray = key;
          if (null != key.key) {
            _slicedToArray = key.toLocaleLowerCase();
          }
          let tmp2 = key.keyCode === keyCode;
          const code = key.code;
          if (tmp2) {
            tmp2 = _slicedToArray === _slicedToArray;
          }
          if (tmp2) {
            tmp2 = code === closure_0;
          }
          return tmp2;
        });
      }
    }
  }
  getWeightedPossibleKeyStringMatches(keyString, result, keyCode) {
    let closure_1 = result;
    let closure_2 = keyCode;
    const cachedAllEvents = this.cachedAllEvents;
    const found = cachedAllEvents.filter((key) => {
      let toLocaleLowerCaseResult = key;
      if (null != key.key) {
        toLocaleLowerCaseResult = key.toLocaleLowerCase();
      }
      let toLocaleLowerCaseResult1 = keyString;
      if (null != keyString) {
        toLocaleLowerCaseResult1 = keyString.toLocaleLowerCase();
      }
      let tmp4 = null == keyCode || key.keyCode === tmp3;
      const tmp6 = null == dependencyMap || key.key.code === tmp5;
      if (tmp4) {
        tmp4 = toLocaleLowerCaseResult === toLocaleLowerCaseResult1;
      }
      if (tmp4) {
        tmp4 = tmp6;
      }
      return tmp4;
    });
    return found.sort((key, key2) => {
      let toLocaleLowerCaseResult = key;
      if (null != key.key) {
        toLocaleLowerCaseResult = key.toLocaleLowerCase();
      }
      let toLocaleLowerCaseResult1 = keyString;
      if (null != keyString) {
        toLocaleLowerCaseResult1 = keyString.toLocaleLowerCase();
      }
      let num = 0;
      if (toLocaleLowerCaseResult === toLocaleLowerCaseResult1) {
        num = 0.5;
      }
      let sum = num;
      const tmp4 = null != dependencyMap && key.key.code === dependencyMap;
      if (tmp4) {
        sum = num + 0.3;
      }
      let sum1 = sum;
      const tmp7 = null != keyCode && key.key.keyCode === keyCode;
      if (tmp7) {
        sum1 = sum + 0.2;
      }
      let toLocaleLowerCaseResult2 = key2;
      if (null != key2.key) {
        toLocaleLowerCaseResult2 = key2.toLocaleLowerCase();
      }
      let toLocaleLowerCaseResult3 = keyString;
      if (null != keyString) {
        toLocaleLowerCaseResult3 = keyString.toLocaleLowerCase();
      }
      let num4 = 0;
      if (toLocaleLowerCaseResult2 === toLocaleLowerCaseResult3) {
        num4 = 0.5;
      }
      let sum2 = num4;
      const tmp11 = null != dependencyMap && key2.key.code === dependencyMap;
      if (tmp11) {
        sum2 = num4 + 0.3;
      }
      let sum3 = sum2;
      const tmp13 = null != keyCode && key2.key.keyCode === keyCode;
      if (tmp13) {
        sum3 = sum2 + 0.2;
      }
      return sum3 - sum1;
    });
  }
  findKeyboardEventByKey(keyString, code, keyCode) {
    let tmp = code;
    let closure_0 = code;
    let toLocaleLowerCaseResult = keyString;
    if (null != keyString) {
      toLocaleLowerCaseResult = keyString.toLocaleLowerCase();
    }
    const self = this;
    if (null == tmp) {
      const result = self.findCodeFromKeyboardLayoutMap(toLocaleLowerCaseResult);
      closure_0 = result;
      tmp = result;
    }
    if (null != keyCode) {
      if (null != self.keyCodeMap[keyCode]) {
        const found = arr.find((key) => {
          toLocaleLowerCaseResult = key;
          if (null != key.key) {
            toLocaleLowerCaseResult = key.toLocaleLowerCase();
          }
          return toLocaleLowerCaseResult === toLocaleLowerCaseResult && key.code === closure_0;
        });
        if (null != found) {
          return found;
        }
      }
    }
    return _slicedToArray(self.getWeightedPossibleKeyStringMatches(keyString, tmp, keyCode), 1)[0];
  }
  findKeyboardEventByKeyCode(keyCode, code) {
    let defaultKeyboardEventShape;
    const self = this;
    let closure_0 = keyCode;
    let closure_1 = code;
    let keyString = this.getKeyString(keyCode, code);
    const tmp2 = null == keyString && null != code;
    if (tmp2) {
      const layoutMap = self.getLayoutMap();
      keyString = layoutMap.get(code);
    }
    if (null == keyString) {
      const keyCodeMapItem = self.getKeyCodeMapItem(keyCode);
      const found = keyCodeMapItem.find((keyCode) => {
        let tmp3 = tmp;
        if (null != code) {
          tmp3 = keyCode.keyCode === closure_0 && keyCode.code === tmp2;
        }
        return tmp3;
      });
      let key;
      if (found != null) {
        key = found.key;
      }
      keyString = key;
    }
    if (null == keyString) {
      defaultKeyboardEventShape = self.getDefaultKeyboardEventShape(undefined, keyCode, code);
    } else {
      defaultKeyboardEventShape = self.findKeyboardEventByKey(keyString, code, keyCode);
    }
    return defaultKeyboardEventShape;
  }
  getDefaultKeyboardEventShape(toLocaleLowerCase, keyCode, code) {
    let tmp10;
    let tmp7;
    let closure_0 = keyCode;
    let tmp;
    if (null != toLocaleLowerCase) {
      let toLocaleLowerCaseResult = toLocaleLowerCase;
      if (null != toLocaleLowerCase) {
        toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
      }
      tmp = toLocaleLowerCaseResult;
    }
    const self = this;
    let result = code;
    if (null != tmp) {
      if (null != self.keyMap[tmp]) {
        if (result == null) {
          result = self.findCodeFromKeyboardLayoutMap(tmp);
        }
        const obj2 = { keyCode: self.keyMap[tmp], key: tmp10, code: result };
        tmp10 = undefined;
        if (null != tmp) {
          let toLocaleLowerCaseResult1 = tmp;
          if (null != tmp) {
            toLocaleLowerCaseResult1 = tmp.toLocaleLowerCase();
          }
          tmp10 = toLocaleLowerCaseResult1;
        }
        return obj2;
      }
    } else if (null != keyCode) {
      const cachedKeyMapEntries = self.cachedKeyMapEntries;
      const found = cachedKeyMapEntries.find((item) => {
        let tmp;
        [, tmp] = item;
        return tmp === keyCode;
      });
      let first;
      if (found != null) {
        first = found[0];
      }
      if (null != first) {
        let result1 = result;
        if (result == null) {
          result1 = self.findCodeFromKeyboardLayoutMap(first);
        }
        obj = { keyCode, key: tmp7, code: result1 };
        tmp7 = undefined;
        if (null != first) {
          let toLocaleLowerCaseResult2 = first;
          if (null != first) {
            toLocaleLowerCaseResult2 = first.toLocaleLowerCase();
          }
          tmp7 = toLocaleLowerCaseResult2;
        }
        return obj;
      }
    }
  }
}
const prototype2 = KeyboardMapper.prototype;
let c17 = null;
let c18 = null;
let result = size.fileFinishedImporting("utils/web/KeyboardLayoutMapUtils.tsx");
const getLayoutMap_export = function getLayoutMap() {
  let layoutMap;
  let promise;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag) {
    layoutMap = obj;
  } else {
    let tmp3;
    if (null == c17) {
      tmp3 = null;
      if (null == promise) {
        let closure_0 = _asyncToGenerator(async function (arg0) {
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp4;
                  let closure_1 = tmp;
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: syncKeyboardLayoutMap(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const self = this;
                let closure_17 = new KeyboardMapper(LinuxKeyToCode);
                const _document = document;
                const str = "keydown";
                const listener = document.addEventListener("keydown", (event) => {
                  try {
                    if (closure_1_17 != null) {
                      closure_1_17.addEvent(event);
                    }
                  } catch (tmp3) {
                    const obj2 = { event, error: tmp3 };
                    logger.error("KeyboardMapper - Error adding event", obj2);
                  }
                });
                closure_0();
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c4 = 3;
              throw tmp15;
            }
          }
        });
        const self = this;
        const self2 = this;
        tmp3 = null;
        promise = new Promise(function () {
          return closure_0(...arguments);
        });
      }
    } else {
      tmp3 = c17;
    }
    layoutMap = undefined;
    if (tmp3 != null) {
      layoutMap = tmp3.getLayoutMap();
    }
    if (layoutMap == null) {
      layoutMap = obj;
    }
  }
  return layoutMap;
};

export const BACKTICK_CODES = set;
export const DefaultKeyboardLayout = frozen;
export { normalizeKeyMap };
export { initializeKeyboardMapper };
export const __DEV_overrideLayoutMapKey = function __DEV_overrideLayoutMapKey(arg0, arg1) {
  _null._set(arg0, arg1);
  if (_null != null) {
    const result = _null._initializeInternalLayoutMap();
  }
  if (_null != null) {
    _null.updateCaches();
  }
};
export { getKeyboardMapper };
export const resetKeyboardMapper = function resetKeyboardMapper() {
  return obj(...arguments);
};
export { getLayoutMap_export as getLayoutMap };
export { reverseLookupCodeFromKey };
export { getExactKeyboardEventMatchFromAny };
export const getKeyboardEventShapeFromAny = function getKeyboardEventShapeFromAny(keyCode) {
  let promise;
  const tmp = getExactKeyboardEventMatchFromAny(keyCode);
  if (null != tmp) {
    return tmp;
  } else {
    let tmp2;
    if (null == c17) {
      const tmp3 = promise;
      tmp2 = null;
      if (null == promise) {
        const tmp4 = globalThis;
        let closure_0 = _asyncToGenerator(async function (arg0) {
          closure_0 = arg0;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_2 = tmp4;
                  let closure_1 = tmp;
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: syncKeyboardLayoutMap(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const self = this;
                let closure_17 = new KeyboardMapper(LinuxKeyToCode);
                const _document = document;
                const str = "keydown";
                const listener = document.addEventListener("keydown", (event) => {
                  try {
                    if (closure_1_17 != null) {
                      closure_1_17.addEvent(event);
                    }
                  } catch (tmp3) {
                    const obj2 = { event, error: tmp3 };
                    logger.error("KeyboardMapper - Error adding event", obj2);
                  }
                });
                closure_0();
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c4 = 3;
              throw tmp15;
            }
          }
        });
        let self = this;
        const self2 = this;
        promise = new Promise(function () {
          return closure_0(...arguments);
        });
        tmp2 = null;
      }
    } else {
      tmp2 = c17;
    }
    if (null == tmp2) {
      return null;
    } else {
      keyCode = keyCode.keyCode;
      let tmp8;
      if (null != keyCode.key) {
        let toLocaleLowerCaseResult = key;
        if (null != keyCode.key) {
          toLocaleLowerCaseResult = key.toLocaleLowerCase();
        }
        tmp8 = toLocaleLowerCaseResult;
      }
      const code = keyCode.code;
      if (null != tmp8) {
        const result = tmp2.findKeyboardEventByKey(tmp8, code, keyCode);
        if (null != result) {
          return result;
        }
      }
      if (null != keyCode) {
        const result1 = tmp2.findKeyboardEventByKeyCode(keyCode, code);
        if (null != result1) {
          return result1;
        }
      }
      return null;
    }
  }
};
export const getKeyboardEventShapeFromKey = function getKeyboardEventShapeFromKey(codeToKeyLanguageCorrection) {
  let tmp;
  if (null != codeToKeyLanguageCorrection) {
    tmp = normalizeKey(codeToKeyLanguageCorrection);
  }
  if (null == tmp) {
    return null;
  } else {
    const tmp12 = reverseLookupCodeFromKey(tmp);
    const obj3 = getKeyboardMapper();
    let result;
    if (obj3 != null) {
      result = obj3.findKeyboardEventByKey(tmp, tmp12);
    }
    if (result == null) {
      result = null;
    }
    if (null != result) {
      return result;
    } else {
      try {
        const tmp13Result = getKeyboardMapper();
        let defaultKeyboardEventShape;
        if (tmp13Result != null) {
          defaultKeyboardEventShape = tmp13Result.getDefaultKeyboardEventShape(tmp, undefined, tmp12);
        }
        if (defaultKeyboardEventShape == null) {
          defaultKeyboardEventShape = null;
        }
        if (null == defaultKeyboardEventShape) {
          return null;
        } else {
          const self = this;
          const self2 = this;
          const keyboardEvent = new globalThis.KeyboardEvent("keydown", tmp5);
          obj = { keyCode: null, key: null, code: null };
          ({ keyCode: obj2.keyCode, key: obj2.key, code: obj2.code } = keyboardEvent);
          return getNormalizedEvent(obj);
        }
      } catch (err) {
        return null;
      }
    }
  }
};
export const getKeyboardEventShapeFromKeycode = function getKeyboardEventShapeFromKeycode(keyCode) {
  obj = getKeyboardMapper();
  let result;
  if (obj != null) {
    result = obj.findKeyboardEventByKeyCode(keyCode);
  }
  if (result == null) {
    result = null;
  }
  if (null != result) {
    return result;
  } else {
    try {
      const tmpResult = getKeyboardMapper();
      let defaultKeyboardEventShape;
      if (tmpResult != null) {
        defaultKeyboardEventShape = tmpResult.getDefaultKeyboardEventShape(undefined, keyCode);
      }
      if (defaultKeyboardEventShape == null) {
        defaultKeyboardEventShape = null;
      }
      if (null == defaultKeyboardEventShape) {
        return null;
      } else {
        const self = this;
        const self2 = this;
        const keyboardEvent = new globalThis.KeyboardEvent("keydown", tmp4);
        const obj2 = { keyCode: null, key: null, code: null };
        ({ keyCode: obj3.keyCode, key: obj3.key, code: obj3.code } = keyboardEvent);
        return getNormalizedEvent(obj2);
      }
    } catch (err) {
      return null;
    }
  }
};
