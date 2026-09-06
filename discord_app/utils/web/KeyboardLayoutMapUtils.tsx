// === Module 14067: KeyboardLayoutMapUtils ===

// Module 14067 (KeyboardLayoutMapUtils)
import LoggerDefault from "Logger" /* 3 */;
import Storage2 from "Storage" /* 510 */;
import keyCodeDefault from "keyCode" /* 14066 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;

require = fn;
function normalizeKey(toLocaleLowerCase) {
  let toLocaleLowerCaseResult = toLocaleLowerCase;
  if (null != toLocaleLowerCase) {
    toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
  }
  return toLocaleLowerCaseResult;
}
function syncKeyboardLayoutMap() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _syncKeyboardLayoutMap() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      let getLayoutMap = c4;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_128_0 = undefined;
          const _navigator2 = navigator;
          getLayoutMap = undefined;
          if (keyboard2 != null) {
            getLayoutMap = keyboard2.getLayoutMap;
          }
          if (null != getLayoutMap) {
            c3 = 1;
            const _navigator = navigator;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: keyboard.getLayoutMap(), done: false };
            return obj1;
          }
        }
      } else if (1 === getLayoutMap) {
        c3 = 0;
        getLayoutMap = new closure_129_9();
        closure_129_10 = getLayoutMap;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const _Object = Object;
        closure_129_10 = new closure_129_9(Object.fromEntries(closure_128_0.entries()));
        c3 = 0;
        c5 = 3;
        return { value: true, done: true };
      }
      c5 = 3;
    } catch (tmp17) {
      closure_2 = tmp17;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp17;
      } else {
        c4 = tmp;
      }
    }
  }
};
function normalizeKeyMap(arg0) {
  const set = new Set();
  const obj = {};
  const entries = Object.entries(arg0);
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
function getNormalizedEvent(keyboardMapper) {
  const obj = { keyCode: keyboardMapper.keyCode, key: null, code: null };
  let tmp;
  if (null != keyboardMapper.key) {
    let toLocaleLowerCaseResult = key;
    if (null != keyboardMapper.key) {
      toLocaleLowerCaseResult = key.toLocaleLowerCase();
    }
    tmp = toLocaleLowerCaseResult;
  }
  obj.key = tmp;
  obj.code = keyboardMapper.code;
  return obj;
}
function getKeyboardMapper() {
  if (null == c17) {
    let tmp = null;
    if (null == promise) {
      closure_0 = asyncGeneratorStep(async (arg0) => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp5;
                closure_1 = tmp2;
                closure_129_0 = closure_0;
                c3 = 1;
                c4 = 1;
                const obj1 = { value: syncKeyboardLayoutMap(), done: false };
                return obj1;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_17 = new KeyboardMapper(LinuxKeyToCode);
              const _document = document;
              const listener = document.addEventListener("keydown", (event) => {
                try {
                  let obj = closure_1_17;
                  if (closure_1_17 != null) {
                    obj.addEvent(event);
                  }
                } catch (tmp4) {
                  obj = { event: tmp, error: tmp4 };
                  logger.error("KeyboardMapper - Error adding event", obj);
                }
              });
              closure_129_0();
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp17) {
            c4 = tmp;
            throw tmp17;
          }
        }
      });
      promise = new Promise(function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      });
      tmp = null;
    }
  } else {
    tmp = c17;
  }
  return tmp;
}
let closure_20 = async function _resetKeyboardMapper() {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp4;
          c1 = 1;
          c2 = 1;
          const obj1 = { value: syncKeyboardLayoutMap(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        obj = closure_128_19();
        if (obj != null) {
          obj.reset();
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
};
function reverseLookupCodeFromKey(toLocaleLowerCase) {
  let tmp;
  if (null != toLocaleLowerCase) {
    let toLocaleLowerCaseResult = toLocaleLowerCase;
    if (null != toLocaleLowerCase) {
      toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
    }
    tmp = toLocaleLowerCaseResult;
  }
  if (null != tmp) {
    if (null == c17) {
      let tmp4 = null;
      if (null == promise) {
        closure_0 = asyncGeneratorStep(async (arg0) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
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
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_2 = tmp5;
                  closure_1 = tmp2;
                  closure_129_0 = closure_0;
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: syncKeyboardLayoutMap(), done: false };
                  return obj1;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_17 = new KeyboardMapper(LinuxKeyToCode);
                const _document = document;
                const listener = document.addEventListener("keydown", (event) => {
                  try {
                    let obj = closure_1_17;
                    if (closure_1_17 != null) {
                      obj.addEvent(event);
                    }
                  } catch (tmp4) {
                    obj = { event: tmp, error: tmp4 };
                    logger.error("KeyboardMapper - Error adding event", obj);
                  }
                });
                closure_129_0();
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp17) {
              c4 = tmp;
              throw tmp17;
            }
          }
        });
        promise = new Promise(function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        });
        tmp4 = null;
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
function getExactKeyboardEventMatchFromAny(key) {
  let tmp;
  if (null != key.key) {
    let toLocaleLowerCaseResult = key;
    if (null != key.key) {
      toLocaleLowerCaseResult = key.toLocaleLowerCase();
    }
    tmp = toLocaleLowerCaseResult;
  }
  let tmp4 = null;
  if (null != tmp) {
    if (null == c17) {
      let tmp6 = null;
      if (null == promise) {
        closure_0 = asyncGeneratorStep(async (arg0) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
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
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_2 = tmp5;
                  closure_1 = tmp2;
                  closure_129_0 = closure_0;
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: syncKeyboardLayoutMap(), done: false };
                  return obj1;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_17 = new KeyboardMapper(LinuxKeyToCode);
                const _document = document;
                const listener = document.addEventListener("keydown", (event) => {
                  try {
                    let obj = closure_1_17;
                    if (closure_1_17 != null) {
                      obj.addEvent(event);
                    }
                  } catch (tmp4) {
                    obj = { event: tmp, error: tmp4 };
                    logger.error("KeyboardMapper - Error adding event", obj);
                  }
                });
                closure_129_0();
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp17) {
              c4 = tmp;
              throw tmp17;
            }
          }
        });
        promise = new Promise(function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        });
        tmp6 = null;
      }
    } else {
      tmp6 = c17;
    }
    let result;
    if (tmp6 != null) {
      result = tmp6.findExactKeyboardEventMatch(tmp, tmp3, key.keyCode);
    }
    if (result == null) {
      result = null;
    }
    tmp4 = result;
  }
  return tmp4;
}
const KeyboardConstants = fn(7504);
({ LinuxKeyToCode, MacosKeyToCode, WindowsKeyToCode } = KeyboardConstants);
const logger = new LoggerDefault("KeyboardLayoutMapUtils");
let PlatformUtils = fn(1115);
if (!PlatformUtils.isLinux()) {
  if (!obj2.isMac()) {
    if (!obj3.isWindows()) {
      WindowsKeyToCode = keyCodeDefault.codes;
    }
    MacosKeyToCode = WindowsKeyToCode;
    obj3 = fn(1115);
  }
  LinuxKeyToCode = MacosKeyToCode;
  obj2 = fn(1115);
}
function initializeKeyboardMapper() {
  if (null == promise) {
    closure_0 = asyncGeneratorStep(async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              c3 = 1;
              c4 = 1;
              const obj1 = { value: syncKeyboardLayoutMap(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_17 = new KeyboardMapper(LinuxKeyToCode);
            const _document = document;
            const listener = document.addEventListener("keydown", (event) => {
              try {
                let obj = closure_1_17;
                if (closure_1_17 != null) {
                  obj.addEvent(event);
                }
              } catch (tmp4) {
                obj = { event: tmp, error: tmp4 };
                logger.error("KeyboardMapper - Error adding event", obj);
              }
            });
            closure_129_0();
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c4 = tmp;
          throw tmp17;
        }
      }
    });
    promise = new Promise(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }
  return promise;
}
let tmp3 = new LoggerDefault("KeyboardLayoutMapUtils");
const frozen = Object.freeze({ KeyA: "a", KeyB: "b", KeyC: "c", KeyD: "d", KeyE: "e", KeyF: "f", KeyG: "g", KeyH: "h", KeyI: "i", KeyJ: "j", KeyK: "k", KeyL: "l", KeyM: "m", KeyN: "n", KeyO: "o", KeyP: "p", KeyQ: "q", KeyR: "r", KeyS: "s", KeyT: "t", KeyU: "u", KeyV: "v", KeyW: "w", KeyX: "x", KeyY: "y", KeyZ: "z", Digit0: "0", Digit1: "1", Digit2: "2", Digit3: "3", Digit4: "4", Digit5: "5", Digit6: "6", Digit7: "7", Digit8: "8", Digit9: "9", Backquote: "`", Backslash: "\\", Quote: "'", Slash: "/", Comma: ",", Period: ".", Semicolon: ";", Equal: "=", Minus: "-", BracketLeft: "[", BracketRight: "]", IntlBackslash: "\u00A7" });
class DiscordKeyboardLayoutMap {
  constructor() {
    tmp = global;
    if (global === undefined) {
      tmp = closure_7;
    }
    obj = Object.create(new.target.prototype);
    entries = Object.entries(tmp);
    map = new Map(entries.map((item) => {
      [tmp, obj] = item;
      const items = [tmp, ];
      let toLocaleLowerCaseResult = obj;
      if (null != obj) {
        toLocaleLowerCaseResult = obj.toLocaleLowerCase();
      }
      items[1] = toLocaleLowerCaseResult;
      return items;
    }));
    obj.map = map;
    return obj;
  }
}
const prototype = DiscordKeyboardLayoutMap.prototype;
prototype["get"] = function get(arg0) {
  return this.map.get(arg0);
};
prototype["has"] = function has(arg0) {
  return this.map.has(arg0);
};
prototype["keys"] = function keys() {
  return this.map.keys();
};
prototype["values"] = function values() {
  return this.map.values();
};
prototype["entries"] = function entries() {
  return this.map.entries();
};
prototype["forEach"] = function forEach(arg0, arg1) {
  return this.map.forEach(arg0, arg1);
};
Object.defineProperty(prototype, "size", {
  get: function size() {
    return this.map.size;
  },
  set: undefined
});
prototype["_set"] = function _set(arg0, arg1) {
  const result = this.map.set(arg0, arg1);
};
PlatformUtils = Object.create(DiscordKeyboardLayoutMap.prototype);
let entries = Object.entries(frozen);
let set = new Set([192, 220, 222, 223, 229]);
PlatformUtils.map = new Map(entries.map((item) => {
  [tmp, obj] = item;
  const items = [tmp, ];
  let toLocaleLowerCaseResult = obj;
  if (null != obj) {
    toLocaleLowerCaseResult = obj.toLocaleLowerCase();
  }
  items[1] = toLocaleLowerCaseResult;
  return items;
}));
let c15 = "keyboard-layout-map";
class BaseKeyboardMapper {
  constructor() {
    obj = global;
    if (global === undefined) {
      obj = {};
    }
    merged = Object.assign({ _internalKeyLayoutMap: null, _cachedKeyCodeMapEntries: null, _cachedKeyMapEntries: null, _cachedKeyLayoutMapEntries: null, _cachedAllEvents: null });
    merged[1] = [];
    merged[2] = [];
    merged[3] = [];
    merged[4] = [];
    merged._defaultKeyMap = obj;
    Storage = closure_0(closure_1[7]).Storage;
    value = Storage.get(c15);
    if (value == null) {
      value = null;
    }
    if (null == value) {
      tmp2 = normalizeKeyMap;
      obj = {};
      tmp3 = obj;
      tmp4 = obj;
      merged1 = Object.assign(obj);
      value = normalizeKeyMap(obj);
    }
    merged.keyMap = value;
    result = merged._initializeInternalLayoutMap();
    merged.keyCodeMap = merged._buildKeyCodeMapFromKeyMap();
    updateCachesResult = merged.updateCaches();
    saveResult = merged.save();
    return merged;
  }
}
const prototype2 = BaseKeyboardMapper.prototype;
prototype2["_setCachedKeyCodeMapEntries"] = function _setCachedKeyCodeMapEntries() {
  const entries = Object.entries(this.keyCodeMap);
  this._cachedKeyCodeMapEntries = entries.map((item) => {
    [tmp, tmp2] = item;
    const items = [Number(tmp), tmp2];
    return items;
  });
  const _cachedKeyCodeMapEntries = this._cachedKeyCodeMapEntries;
  this._cachedAllEvents = _cachedKeyCodeMapEntries.flatMap((item) => {
    [, tmp] = item;
    return tmp;
  });
};
prototype2["_setCachedKeyMapEntries"] = function _setCachedKeyMapEntries() {
  this._cachedKeyMapEntries = Object.entries(this.keyMap);
};
prototype2["_setCachedKeyLayoutMapEntries"] = function _setCachedKeyLayoutMapEntries() {
  const layoutMap = this.getLayoutMap();
  this._cachedKeyLayoutMapEntries = Array.from(layoutMap.entries());
};
Object.defineProperty(prototype2, "cachedKeyCodeMapEntries", {
  get: function cachedKeyCodeMapEntries() {
    const self = this;
    if (0 === this._cachedKeyCodeMapEntries.length) {
      const result = self._setCachedKeyCodeMapEntries();
    }
    return self._cachedKeyCodeMapEntries;
  },
  set: undefined
});
Object.defineProperty(prototype2, "cachedKeyMapEntries", {
  get: function cachedKeyMapEntries() {
    const self = this;
    if (0 === this._cachedKeyMapEntries.length) {
      const result = self._setCachedKeyMapEntries();
    }
    return self._cachedKeyMapEntries;
  },
  set: undefined
});
Object.defineProperty(prototype2, "cachedKeyLayoutMapEntries", {
  get: function cachedKeyLayoutMapEntries() {
    const self = this;
    if (0 === this._cachedKeyLayoutMapEntries.length) {
      const result = self._setCachedKeyLayoutMapEntries();
    }
    return self._cachedKeyLayoutMapEntries;
  },
  set: undefined
});
Object.defineProperty(prototype2, "cachedAllEvents", {
  get: function cachedAllEvents() {
    const self = this;
    if (0 === this._cachedAllEvents.length) {
      const result = self._setCachedKeyCodeMapEntries();
    }
    return self._cachedAllEvents;
  },
  set: undefined
});
prototype2["getKeyCodeMapItem"] = function getKeyCodeMapItem(keyCode) {
  const self = this;
  if (null == this.keyCodeMap[keyCode]) {
    self.keyCodeMap[keyCode] = [];
  }
  return self.keyCodeMap[keyCode];
};
prototype2["_buildKeyCodeMapFromKeyMap"] = function _buildKeyCodeMapFromKeyMap() {
  const self = this;
  let obj = {};
  const entries = Object.entries(this.keyMap);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let items = obj[tmp7];
    if (items == null) {
      items = [];
    }
    obj[tmp7] = items;
    let arr2 = obj[tmp7];
    obj = { keyCode: tmp7, key: tmp6, code: self.findCodeFromKeyboardLayoutMap(tmp6, true) };
    let arr = arr2.push(obj);
    continue;
  }
  return obj;
};
prototype2["_initializeInternalLayoutMap"] = function _initializeInternalLayoutMap() {
  this._internalKeyLayoutMap = new Map(Array.from(PlatformUtils.entries()));
  const result = this._setCachedKeyLayoutMapEntries();
};
prototype2["_hasExactMatch"] = function _hasExactMatch(keyCode) {
  if (null == keyCode.keyCode) {
    return false;
  } else {
    const self = this;
    return null != this.keyCodeMap[keyCode.keyCode] && this.keyCodeMap[keyCode.keyCode].some((key) => key.key === keyCode.key && key.code === keyCode.code && key.keyCode === keyCode.keyCode);
  }
};
prototype2["addEvent"] = function addEvent(keyCode) {
  const obj = { keyCode: keyCode.keyCode, key: null, code: null };
  let tmp;
  if (null != keyCode.key) {
    let toLocaleLowerCaseResult = key;
    if (null != keyCode.key) {
      toLocaleLowerCaseResult = key.toLocaleLowerCase();
    }
    tmp = toLocaleLowerCaseResult;
  }
  const self = this;
  obj.key = tmp;
  obj.code = keyCode.code;
  if (null == this._internalKeyLayoutMap) {
    const result = self._initializeInternalLayoutMap();
  }
  if (!self._hasExactMatch(obj)) {
    let tmp4 = null != obj.key;
    if (tmp4) {
      tmp4 = "dead" !== obj.key;
    }
    if (tmp4) {
      if (null == self.keyMap[obj.key]) {
        self.keyMap[obj.key] = obj.keyCode;
      } else {
        let logKeyboardMismatches = self.keyMap[obj.key] !== obj.keyCode;
        if (logKeyboardMismatches) {
          logKeyboardMismatches = DeveloperOptionsStore.logKeyboardMismatches;
        }
        if (logKeyboardMismatches) {
          const _HermesInternal = HermesInternal;
          logger.error("KeyboardMapper - Key code mismatch for key " + obj.key + ": " + self.keyMap[obj.key] + " !== " + obj.keyCode);
        }
      }
      let items = self.keyCodeMap[obj.keyCode];
      if (items == null) {
        items = [];
      }
      self.keyCodeMap[obj.keyCode] = items;
      self.keyCodeMap[obj.keyCode].push(obj);
      const _internalKeyLayoutMap = self._internalKeyLayoutMap;
      if (_internalKeyLayoutMap != null) {
        const result1 = _internalKeyLayoutMap.set(obj.code, obj.key);
      }
      self.updateCaches();
    }
  }
};
prototype2["updateCaches"] = function updateCaches() {
  const result = this._setCachedKeyCodeMapEntries();
  const result1 = this._setCachedKeyMapEntries();
  const result2 = this._setCachedKeyLayoutMapEntries();
};
prototype2["reset"] = function reset() {
  this._internalKeyLayoutMap = null;
  const merged = Object.assign(this._defaultKeyMap);
  this.keyMap = normalizeKeyMap({});
  const result = this._initializeInternalLayoutMap();
  this.keyCodeMap = this._buildKeyCodeMapFromKeyMap();
  this.updateCaches();
  this.save();
};
prototype2["save"] = function save() {
  const Storage = Storage2.Storage;
  const result = Storage.set(c15, this.keyMap);
};
prototype2["getLayoutMap"] = function getLayoutMap() {
  return null == this._internalKeyLayoutMap ? PlatformUtils : this._internalKeyLayoutMap;
};
prototype2["getKeyCode"] = function getKeyCode(arg0) {
  return this.keyMap[arg0];
};
prototype2["findCodeFromKeyboardLayoutMap"] = function findCodeFromKeyboardLayoutMap(toLocaleLowerCaseResult, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c0 = undefined;
  let prop = this.cachedKeyLayoutMapEntries;
  if (flag) {
    const _Array = Array;
    prop = Array.from(PlatformUtils.entries());
  }
  if (null != toLocaleLowerCaseResult) {
    toLocaleLowerCaseResult = toLocaleLowerCaseResult.toLocaleLowerCase();
  }
  c0 = toLocaleLowerCaseResult;
  const found = prop.find((item) => {
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
};
class KeyboardMapper extends BaseKeyboardMapper {
}
const prototype3 = KeyboardMapper.prototype;
prototype3["getKeyString"] = function getKeyString(keyCode, code) {
  const self = this;
  closure_1 = keyCode;
  closure_0 = code;
  let keyCodeMapItem = this.getKeyCodeMapItem(keyCode);
  if (0 === keyCodeMapItem.length) {
    const cachedKeyMapEntries = this.cachedKeyMapEntries;
    const found = cachedKeyMapEntries.filter((item) => {
      [, tmp] = item;
      return tmp == tmp;
    });
    keyCodeMapItem = found.map((item) => {
      [tmp, tmp2] = item;
      const obj = { key: tmp, keyCode: tmp2, code: null };
      let result = closure_0;
      if (closure_0 == null) {
        result = self.findCodeFromKeyboardLayoutMap(tmp);
      }
      obj.code = result;
      return obj;
    });
  }
  const found1 = keyCodeMapItem.find((keyCode) => {
    let tmp3 = tmp;
    if (null != closure_0) {
      let tmp4 = tmp;
      if (tmp) {
        tmp4 = keyCode.code === tmp2;
      }
      tmp3 = tmp4;
    }
    return tmp3;
  });
  let key;
  if (found1 != null) {
    key = found1.key;
  }
  return key;
};
prototype3["findExactKeyboardEventMatch"] = function findExactKeyboardEventMatch(toLocaleLowerCaseResult, arg1, keyCode) {
  let tmp = arg1;
  closure_0 = arg1;
  closure_1 = keyCode;
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
        toLocaleLowerCaseResult = key;
        if (null != key.key) {
          toLocaleLowerCaseResult = key.toLocaleLowerCase();
        }
        let tmp2 = toLocaleLowerCaseResult === toLocaleLowerCaseResult;
        if (tmp2) {
          tmp2 = key.code === closure_0;
        }
        return tmp2;
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
        toLocaleLowerCaseResult = key;
        if (null != key.key) {
          toLocaleLowerCaseResult = key.toLocaleLowerCase();
        }
        let tmp2 = key.keyCode === closure_1;
        if (tmp2) {
          tmp2 = toLocaleLowerCaseResult === toLocaleLowerCaseResult;
        }
        if (tmp2) {
          tmp2 = key.code === closure_0;
        }
        return tmp2;
      });
    }
  }
};
prototype3["getWeightedPossibleKeyStringMatches"] = function getWeightedPossibleKeyStringMatches(keyString, result, keyCode) {
  closure_1 = result;
  closure_2 = keyCode;
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
    let tmp4 = null == closure_2 || key.keyCode === tmp3;
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
    if (tmp4) {
      sum = num + 0.3;
    }
    let sum1 = sum;
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
    if (tmp11) {
      sum2 = num4 + 0.3;
    }
    let sum3 = sum2;
    if (tmp13) {
      sum3 = sum2 + 0.2;
    }
    return sum3 - sum1;
  });
};
prototype3["findKeyboardEventByKey"] = function findKeyboardEventByKey(keyString, code, keyCode) {
  let tmp = code;
  closure_0 = code;
  let toLocaleLowerCaseResult = keyString;
  if (null != keyString) {
    toLocaleLowerCaseResult = keyString.toLocaleLowerCase();
  }
  const self = this;
  dependencyMap = toLocaleLowerCaseResult;
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
        let tmp2 = toLocaleLowerCaseResult === toLocaleLowerCaseResult;
        if (tmp2) {
          tmp2 = key.code === closure_0;
        }
        return tmp2;
      });
      if (null != found) {
        return found;
      }
    }
  }
  return _slicedToArray(self.getWeightedPossibleKeyStringMatches(keyString, tmp, keyCode), 1)[0];
};
prototype3["findKeyboardEventByKeyCode"] = function findKeyboardEventByKeyCode(keyCode, code) {
  const self = this;
  closure_0 = keyCode;
  closure_1 = code;
  let keyString = this.getKeyString(keyCode, code);
  if (tmp2) {
    const layoutMap = self.getLayoutMap();
    keyString = layoutMap.get(code);
  }
  if (null == keyString) {
    const keyCodeMapItem = self.getKeyCodeMapItem(keyCode);
    const found = keyCodeMapItem.find((keyCode) => {
      let tmp3 = tmp;
      if (null != closure_1) {
        let tmp4 = tmp;
        if (tmp) {
          tmp4 = keyCode.code === tmp2;
        }
        tmp3 = tmp4;
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
    let defaultKeyboardEventShape = self.getDefaultKeyboardEventShape(undefined, keyCode, code);
  } else {
    defaultKeyboardEventShape = self.findKeyboardEventByKey(keyString, code, keyCode);
  }
  return defaultKeyboardEventShape;
};
prototype3["getDefaultKeyboardEventShape"] = function getDefaultKeyboardEventShape(toLocaleLowerCase, keyCode, code) {
  closure_0 = keyCode;
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
      let obj = { keyCode: tmp9, key: null, code: null };
      let tmp10;
      if (null != tmp) {
        let toLocaleLowerCaseResult1 = tmp;
        if (null != tmp) {
          toLocaleLowerCaseResult1 = tmp.toLocaleLowerCase();
        }
        tmp10 = toLocaleLowerCaseResult1;
      }
      obj.key = tmp10;
      obj.code = result;
      return obj;
    }
  } else if (null != keyCode) {
    const cachedKeyMapEntries = self.cachedKeyMapEntries;
    const found = cachedKeyMapEntries.find((item) => {
      [, tmp] = item;
      return tmp === closure_0;
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
      obj = { keyCode, key: null, code: null };
      let tmp7;
      if (null != first) {
        let toLocaleLowerCaseResult2 = first;
        if (null != first) {
          toLocaleLowerCaseResult2 = first.toLocaleLowerCase();
        }
        tmp7 = toLocaleLowerCaseResult2;
      }
      obj.key = tmp7;
      obj.code = result1;
      return obj;
    }
  }
};
let c17 = null;
let c18 = null;
const size = fn(2);
let result = size.fileFinishedImporting("utils/web/KeyboardLayoutMapUtils.tsx");

export const BACKTICK_CODES = set;
export const DefaultKeyboardLayout = frozen;
export { normalizeKeyMap };
export { initializeKeyboardMapper };
export const __DEV_overrideLayoutMapKey = function __DEV_overrideLayoutMapKey(arg0, arg1) {
  PlatformUtils._set(arg0, arg1);
  if (_null != null) {
    const result = _null._initializeInternalLayoutMap();
  }
  if (_null != null) {
    _null.updateCaches();
  }
};
export { getKeyboardMapper };
export const resetKeyboardMapper = function resetKeyboardMapper() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getLayoutMap = function getLayoutMap() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag) {
    let layoutMap = PlatformUtils;
  } else {
    if (null == c17) {
      let tmp3 = null;
      if (null == promise) {
        closure_0 = asyncGeneratorStep(async (arg0) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
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
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_2 = tmp5;
                  closure_1 = tmp2;
                  closure_129_0 = closure_0;
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: syncKeyboardLayoutMap(), done: false };
                  return obj1;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_17 = new KeyboardMapper(LinuxKeyToCode);
                const _document = document;
                const listener = document.addEventListener("keydown", (event) => {
                  try {
                    let obj = closure_1_17;
                    if (closure_1_17 != null) {
                      obj.addEvent(event);
                    }
                  } catch (tmp4) {
                    obj = { event: tmp, error: tmp4 };
                    logger.error("KeyboardMapper - Error adding event", obj);
                  }
                });
                closure_129_0();
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp17) {
              c4 = tmp;
              throw tmp17;
            }
          }
        });
        promise = new Promise(function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        });
        tmp3 = null;
      }
    } else {
      tmp3 = c17;
    }
    layoutMap = undefined;
    if (tmp3 != null) {
      layoutMap = tmp3.getLayoutMap();
    }
    if (layoutMap == null) {
      layoutMap = PlatformUtils;
    }
  }
  return layoutMap;
};
export { reverseLookupCodeFromKey };
export { getExactKeyboardEventMatchFromAny };
export const getKeyboardEventShapeFromAny = function getKeyboardEventShapeFromAny(keyCode) {
  const tmp = getExactKeyboardEventMatchFromAny(keyCode);
  if (null != tmp) {
    return tmp;
  } else {
    if (null == c17) {
      let tmp2 = null;
      if (null == promise) {
        closure_0 = asyncGeneratorStep(async (arg0) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
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
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_2 = tmp5;
                  closure_1 = tmp2;
                  closure_129_0 = closure_0;
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: syncKeyboardLayoutMap(), done: false };
                  return obj1;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_17 = new KeyboardMapper(LinuxKeyToCode);
                const _document = document;
                const listener = document.addEventListener("keydown", (event) => {
                  try {
                    let obj = closure_1_17;
                    if (closure_1_17 != null) {
                      obj.addEvent(event);
                    }
                  } catch (tmp4) {
                    obj = { event: tmp, error: tmp4 };
                    logger.error("KeyboardMapper - Error adding event", obj);
                  }
                });
                closure_129_0();
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp17) {
              c4 = tmp;
              throw tmp17;
            }
          }
        });
        promise = new Promise(function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
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
      let tmp10;
      if (null != keyCode.key) {
        let toLocaleLowerCaseResult = key;
        if (null != keyCode.key) {
          toLocaleLowerCaseResult = key.toLocaleLowerCase();
        }
        tmp10 = toLocaleLowerCaseResult;
      }
      const code = keyCode.code;
      if (null != tmp10) {
        const result = tmp2.findKeyboardEventByKey(tmp10, code, keyCode);
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
  let tmp2;
  if (null != codeToKeyLanguageCorrection) {
    tmp2 = normalizeKey(codeToKeyLanguageCorrection);
  }
  if (null == tmp2) {
    return null;
  } else {
    const tmp15 = reverseLookupCodeFromKey(tmp2);
    const obj3 = getKeyboardMapper();
    let result;
    if (obj3 != null) {
      result = obj3.findKeyboardEventByKey(tmp2, tmp15);
    }
    if (result == null) {
      result = null;
    }
    if (null != result) {
      return result;
    } else {
      try {
        const tmp16Result = getKeyboardMapper();
        let defaultKeyboardEventShape;
        if (tmp16Result != null) {
          defaultKeyboardEventShape = tmp16Result.getDefaultKeyboardEventShape(tmp2, undefined, tmp15);
        }
        if (defaultKeyboardEventShape == null) {
          defaultKeyboardEventShape = null;
        }
        if (null == defaultKeyboardEventShape) {
          return null;
        } else {
          const keyboardEvent = new globalThis.KeyboardEvent("keydown", tmp6);
          ({ keyCode: obj2.keyCode, key: obj2.key, code: obj2.code } = keyboardEvent);
          return getNormalizedEvent({ keyCode: null, key: null, code: null });
        }
      } catch (err) {
        return tmp;
      }
    }
  }
};
export const getKeyboardEventShapeFromKeycode = function getKeyboardEventShapeFromKeycode(keyCode) {
  let obj = getKeyboardMapper();
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
      const tmp2Result = getKeyboardMapper();
      let defaultKeyboardEventShape;
      if (tmp2Result != null) {
        defaultKeyboardEventShape = tmp2Result.getDefaultKeyboardEventShape(undefined, keyCode);
      }
      if (defaultKeyboardEventShape == null) {
        defaultKeyboardEventShape = null;
      }
      if (null == defaultKeyboardEventShape) {
        return null;
      } else {
        const keyboardEvent = new globalThis.KeyboardEvent("keydown", tmp5);
        obj = { keyCode: null, key: null, code: null };
        ({ keyCode: obj3.keyCode, key: obj3.key, code: obj3.code } = keyboardEvent);
        return getNormalizedEvent(obj);
      }
    } catch (err) {
      return tmp;
    }
  }
};