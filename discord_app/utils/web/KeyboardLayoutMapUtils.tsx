// discord_app/utils/web/KeyboardLayoutMapUtils.tsx
import _slicedToArray from "_slicedToArray";
import closure_3 from "set";
import refreshSourceMapCookie from "refreshSourceMapCookie";
import items from "items";
import set from "set";
import set from "refreshSourceMapCookie";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";

let LinuxKeyToCode;
let MacosKeyToCode;
let WindowsKeyToCode;
const require = arg1;
function normalizeKey(toLocaleLowerCase) {
  let toLocaleLowerCaseResult = toLocaleLowerCase;
  if (null != toLocaleLowerCase) {
    toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
  }
  return toLocaleLowerCaseResult;
}
function syncKeyboardLayoutMap() {
  const self = this;
  const apply = _syncKeyboardLayoutMap.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _syncKeyboardLayoutMap() {
  const self = this;
  const tmp = callback2(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let closure_0 = getLayoutMap;
            closure_0 = undefined;
            const _navigator2 = navigator;
            getLayoutMap = undefined;
            if (keyboard2 != null) {
              getLayoutMap = keyboard2.getLayoutMap;
            }
            if (null != getLayoutMap) {
              let c3 = 1;
              const _navigator = navigator;
              c4 = 2;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = keyboard.getLayoutMap();
              return obj1;
            }
          }
        } else if (1 === getLayoutMap) {
          c3 = 0;
          getLayoutMap = new closure_9();
          let closure_10 = getLayoutMap;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          const _Object = Object;
          closure_10 = new closure_9(Object.fromEntries(closure_0.entries()));
          c3 = 0;
          c5 = 3;
          return { value: true, done: true };
        }
        c5 = 3;
      } catch (tmp17) {
        let _slicedToArray = tmp17;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp17;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _syncKeyboardLayoutMap = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function normalizeKeyMap(arg0) {
  const set = new Set();
  const obj = {};
  const entries = Object.entries(arg0);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let tmp6 = tmp5[1];
    let tmp7 = normalizeKey;
    let tmp8 = normalizeKey(tmp5[0]);
    let tmp9 = tmp8;
    if (set.has(tmp8)) {
      let tmp10 = tmp8;
      if (null != obj[tmp9]) {
        let tmp11 = tmp8;
        let tmp12 = tmp6;
        if (obj[tmp9] !== tmp6) {
          let tmp16 = tmp3;
          let tmp17 = tmp8;
          let _HermesInternal = HermesInternal;
          let errorResult = tmp3.error("Seperate keyCode mappings found for: " + tmp9);
          continue;
        }
      }
    }
    let tmp13 = tmp8;
    let addResult = set.add(tmp9);
    let tmp15 = tmp6;
    obj[tmp9] = tmp6;
  }
  return obj;
}
function getNormalizedEvent(keyCode) {
  const obj = { keyCode: keyCode.keyCode, key: null, code: null };
  let tmp;
  if (null != keyCode.key) {
    let toLocaleLowerCaseResult = key;
    if (null != keyCode.key) {
      toLocaleLowerCaseResult = key.toLocaleLowerCase();
    }
    tmp = toLocaleLowerCaseResult;
  }
  obj[1] = tmp;
  obj[2] = keyCode.code;
  return obj;
}
function getKeyboardMapper() {
  if (null == c17) {
    let tmp = null;
    if (null == promise) {
      let closure_0;
      closure_0 = callback2((arg0) => {
        let closure_0 = arg0;
        let c3 = 0;
        let c4 = 0;
        return (function*(arg0) {
          if (c4 === 2) {
            c4 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let _slicedToArray = tmp5;
                  let closure_1 = tmp2;
                  c3 = 1;
                  c4 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_11();
                  return obj1;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const outer1_17 = new outer1_16(outer1_6);
                const _document = document;
                const listener = document.addEventListener("keydown", (arg0) => {
                  try {
                    let obj = closure_17;
                    if (closure_17 != null) {
                      obj.addEvent(arg0);
                    }
                  } catch (tmp4) {
                    obj = { event: null, error: null };
                    obj[0] = tmp;
                    obj[1] = tmp4;
                    logger.error("KeyboardMapper - Error adding event", obj);
                  }
                });
                callback();
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp17) {
              c4 = tmp;
              throw tmp17;
            }
          }
        })();
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
function _resetKeyboardMapper() {
  const self = this;
  const tmp = callback2(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            c1 = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_11();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          obj = callback();
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
  });
  const _resetKeyboardMapper = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
        let closure_0;
        closure_0 = callback2((arg0) => {
          let closure_0 = arg0;
          let c3 = 0;
          let c4 = 0;
          return (function*(arg0) {
            if (c4 === 2) {
              c4 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
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
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let _slicedToArray = tmp5;
                    let closure_1 = tmp2;
                    c3 = 1;
                    c4 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer1_11();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  const outer1_17 = new outer1_16(outer1_6);
                  const _document = document;
                  const listener = document.addEventListener("keydown", (arg0) => {
                    try {
                      let obj = closure_17;
                      if (closure_17 != null) {
                        obj.addEvent(arg0);
                      }
                    } catch (tmp4) {
                      obj = { event: null, error: null };
                      obj[0] = tmp;
                      obj[1] = tmp4;
                      logger.error("KeyboardMapper - Error adding event", obj);
                    }
                  });
                  callback();
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp17) {
                c4 = tmp;
                throw tmp17;
              }
            }
          })();
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
        let closure_0;
        closure_0 = callback2((arg0) => {
          let closure_0 = arg0;
          let c3 = 0;
          let c4 = 0;
          return (function*(arg0) {
            if (c4 === 2) {
              c4 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
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
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let _slicedToArray = tmp5;
                    let closure_1 = tmp2;
                    c3 = 1;
                    c4 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer1_11();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  const outer1_17 = new outer1_16(outer1_6);
                  const _document = document;
                  const listener = document.addEventListener("keydown", (arg0) => {
                    try {
                      let obj = closure_17;
                      if (closure_17 != null) {
                        obj.addEvent(arg0);
                      }
                    } catch (tmp4) {
                      obj = { event: null, error: null };
                      obj[0] = tmp;
                      obj[1] = tmp4;
                      logger.error("KeyboardMapper - Error adding event", obj);
                    }
                  });
                  callback();
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp17) {
                c4 = tmp;
                throw tmp17;
              }
            }
          })();
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
({ LinuxKeyToCode, MacosKeyToCode, WindowsKeyToCode } = items);
let c5 = new require("items")("KeyboardLayoutMapUtils");
if (!set.isLinux()) {
  if (!obj2.isMac()) {
    if (!obj3.isWindows()) {
      WindowsKeyToCode = require("keyCode").codes;
    }
    MacosKeyToCode = WindowsKeyToCode;
    obj3 = require("set");
  }
  LinuxKeyToCode = MacosKeyToCode;
  obj2 = require("set");
}
function initializeKeyboardMapper() {
  if (null == promise) {
    let closure_0;
    closure_0 = callback2((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let _slicedToArray = tmp5;
                let closure_1 = tmp2;
                c3 = 1;
                c4 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_11();
                return obj1;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const outer1_17 = new outer1_16(outer1_6);
              const _document = document;
              const listener = document.addEventListener("keydown", (arg0) => {
                try {
                  let obj = closure_17;
                  if (closure_17 != null) {
                    obj.addEvent(arg0);
                  }
                } catch (tmp4) {
                  obj = { event: null, error: null };
                  obj[0] = tmp;
                  obj[1] = tmp4;
                  logger.error("KeyboardMapper - Error adding event", obj);
                }
              });
              callback();
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp17) {
            c4 = tmp;
            throw tmp17;
          }
        }
      })();
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
set = new Set([192, 220, 222, 223, 229]);
const frozen = Object.freeze({ KeyA: "a", KeyB: "b", KeyC: "c", KeyD: "d", KeyE: "e", KeyF: "f", KeyG: "g", KeyH: "h", KeyI: "i", KeyJ: "j", KeyK: "k", KeyL: "l", KeyM: "m", KeyN: "n", KeyO: "o", KeyP: "p", KeyQ: "q", KeyR: "r", KeyS: "s", KeyT: "t", KeyU: "u", KeyV: "v", KeyW: "w", KeyX: "x", KeyY: "y", KeyZ: "z", Digit0: "0", Digit1: "1", Digit2: "2", Digit3: "3", Digit4: "4", Digit5: "5", Digit6: "6", Digit7: "7", Digit8: "8", Digit9: "9", Backquote: "`", Backslash: "\\", Quote: "'", Slash: "/", Comma: ",", Period: ".", Semicolon: ";", Equal: "=", Minus: "-", BracketLeft: "[", BracketRight: "]", IntlBackslash: "\u00A7" });
class DiscordKeyboardLayoutMap {
  constructor() {
    tmp = global;
    if (global === undefined) {
      tmp = LinuxKeyToCode;
    }
    obj = Object.create(new.target.prototype);
    entries = Object.entries(tmp);
    map = new Map(entries.map((arg0) => {
      let obj;
      let tmp;
      [tmp, obj] = arg0;
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
set = Object.create(DiscordKeyboardLayoutMap.prototype);
let entries = Object.entries(frozen);
let tmp3 = new require("items")("KeyboardLayoutMapUtils");
set.map = new Map(entries.map((arg0) => {
  let obj;
  let tmp;
  [tmp, obj] = arg0;
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
    obj = Object.create(new.target.prototype);
    obj[1] = [];
    obj[2] = [];
    obj[3] = [];
    obj[4] = [];
    obj._defaultKeyMap = obj;
    Storage = require("Storage").Storage;
    value = Storage.get(c15);
    if (value == null) {
      value = null;
    }
    if (null == value) {
      tmp2 = normalizeKeyMap;
      obj1 = {};
      tmp3 = obj1;
      tmp4 = obj;
      merged = Object.assign(obj);
      value = normalizeKeyMap(obj1);
    }
    obj.keyMap = value;
    result = obj._initializeInternalLayoutMap();
    obj.keyCodeMap = obj._buildKeyCodeMapFromKeyMap();
    updateCachesResult = obj.updateCaches();
    saveResult = obj.save();
    return obj;
  }
}
const prototype2 = BaseKeyboardMapper.prototype;
prototype2["_setCachedKeyCodeMapEntries"] = function _setCachedKeyCodeMapEntries() {
  const entries = Object.entries(this.keyCodeMap);
  this._cachedKeyCodeMapEntries = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const items = [Number(tmp), tmp2];
    return items;
  });
  const _cachedKeyCodeMapEntries = this._cachedKeyCodeMapEntries;
  this._cachedAllEvents = _cachedKeyCodeMapEntries.flatMap((arg0) => {
    let tmp;
    [, tmp] = arg0;
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
  let tmp6;
  let tmp7;
  const self = this;
  let obj = {};
  const entries = Object.entries(this.keyMap);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    let items = obj[tmp7];
    if (items == null) {
      items = [];
    }
    obj[tmp7] = items;
    let tmp9 = tmp7;
    let arr2 = obj[tmp8];
    obj = { keyCode: null, key: null, code: null };
    obj[0] = tmp8;
    let tmp10 = tmp6;
    obj[1] = tmp6;
    obj[2] = self.findCodeFromKeyboardLayoutMap(tmp6, true);
    let arr = arr2.push(obj);
    continue;
  }
  return obj;
};
prototype2["_initializeInternalLayoutMap"] = function _initializeInternalLayoutMap() {
  this._internalKeyLayoutMap = new Map(Array.from(set.entries()));
  const result = this._setCachedKeyLayoutMapEntries();
};
prototype2["_hasExactMatch"] = function _hasExactMatch(keyCode) {
  let closure_0 = keyCode;
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
  obj[1] = tmp;
  obj[2] = keyCode.code;
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
          logKeyboardMismatches = obj.logKeyboardMismatches;
        }
        if (logKeyboardMismatches) {
          const _HermesInternal = HermesInternal;
          tmp3.error("KeyboardMapper - Key code mismatch for key " + obj.key + ": " + self.keyMap[obj.key] + " !== " + obj.keyCode);
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
      const arr2 = self.keyCodeMap[obj.keyCode];
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
  const Storage = Storage /* Storage */.Storage;
  const result = Storage.set(c15, this.keyMap);
};
prototype2["getLayoutMap"] = function getLayoutMap() {
  return null == this._internalKeyLayoutMap ? set : this._internalKeyLayoutMap;
};
prototype2["getKeyCode"] = function getKeyCode(arg0) {
  return this.keyMap[arg0];
};
prototype2["findCodeFromKeyboardLayoutMap"] = function findCodeFromKeyboardLayoutMap(toLocaleLowerCaseResult, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let c0;
  let prop = this.cachedKeyLayoutMapEntries;
  if (flag) {
    const _Array = Array;
    prop = Array.from(set.entries());
  }
  if (null != toLocaleLowerCaseResult) {
    toLocaleLowerCaseResult = toLocaleLowerCaseResult.toLocaleLowerCase();
  }
  c0 = toLocaleLowerCaseResult;
  const found = prop.find((arg0) => {
    let tmp;
    [, tmp] = arg0;
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
  let closure_1 = keyCode;
  let closure_0 = code;
  let keyCodeMapItem = this.getKeyCodeMapItem(keyCode);
  if (0 === keyCodeMapItem.length) {
    const cachedKeyMapEntries = this.cachedKeyMapEntries;
    const found = cachedKeyMapEntries.filter((arg0) => {
      let tmp;
      [, tmp] = arg0;
      return tmp == tmp;
    });
    keyCodeMapItem = found.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const obj = { key: tmp, keyCode: tmp2, code: null };
      let result = closure_0;
      if (closure_0 == null) {
        result = self.findCodeFromKeyboardLayoutMap(tmp);
      }
      obj[2] = result;
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
prototype3["findExactKeyboardEventMatch"] = function findExactKeyboardEventMatch(toLocaleLowerCase, arg1, keyCode) {
  let tmp = arg1;
  let closure_0 = arg1;
  let closure_1 = keyCode;
  let toLocaleLowerCaseResult = toLocaleLowerCase;
  if (null != toLocaleLowerCase) {
    toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
  }
  const self = this;
  let _slicedToArray = toLocaleLowerCaseResult;
  if (null == tmp) {
    const result = self.findCodeFromKeyboardLayoutMap(toLocaleLowerCaseResult);
    closure_0 = result;
    tmp = result;
  }
  if (null != keyCode) {
    if (null != self.keyCodeMap[keyCode]) {
      const found = arr.find((key) => {
        let toLocaleLowerCaseResult = key;
        if (null != key.key) {
          toLocaleLowerCaseResult = key.toLocaleLowerCase();
        }
        let tmp2 = toLocaleLowerCaseResult === _slicedToArray;
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
        let toLocaleLowerCaseResult = key;
        if (null != key.key) {
          toLocaleLowerCaseResult = key.toLocaleLowerCase();
        }
        let tmp2 = key.keyCode === closure_1;
        if (tmp2) {
          tmp2 = toLocaleLowerCaseResult === _slicedToArray;
        }
        if (tmp2) {
          tmp2 = key.code === closure_0;
        }
        return tmp2;
      });
    }
  }
};
prototype3["getWeightedPossibleKeyStringMatches"] = function getWeightedPossibleKeyStringMatches(keyString, code, keyCode) {
  let closure_0 = keyString;
  let closure_1 = code;
  let _slicedToArray = keyCode;
  const cachedAllEvents = this.cachedAllEvents;
  const found = cachedAllEvents.filter((key) => {
    let toLocaleLowerCaseResult = key;
    if (null != key.key) {
      toLocaleLowerCaseResult = key.toLocaleLowerCase();
    }
    let toLocaleLowerCaseResult1 = closure_0;
    if (null != closure_0) {
      toLocaleLowerCaseResult1 = closure_0.toLocaleLowerCase();
    }
    let tmp4 = null == _slicedToArray || key.keyCode === tmp3;
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
    let toLocaleLowerCaseResult1 = closure_0;
    if (null != closure_0) {
      toLocaleLowerCaseResult1 = obj.toLocaleLowerCase();
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
    let toLocaleLowerCaseResult3 = obj;
    if (null != closure_0) {
      toLocaleLowerCaseResult3 = obj.toLocaleLowerCase();
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
  let closure_0 = code;
  let toLocaleLowerCaseResult = keyString;
  if (null != keyString) {
    toLocaleLowerCaseResult = keyString.toLocaleLowerCase();
  }
  const self = this;
  const dependencyMap = toLocaleLowerCaseResult;
  if (null == tmp) {
    const result = self.findCodeFromKeyboardLayoutMap(toLocaleLowerCaseResult);
    closure_0 = result;
    tmp = result;
  }
  if (null != keyCode) {
    if (null != self.keyCodeMap[keyCode]) {
      const found = arr.find((key) => {
        let toLocaleLowerCaseResult = key;
        if (null != key.key) {
          toLocaleLowerCaseResult = key.toLocaleLowerCase();
        }
        let tmp2 = toLocaleLowerCaseResult === closure_1;
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
  return callback(self.getWeightedPossibleKeyStringMatches(keyString, tmp, keyCode), 1)[0];
};
prototype3["findKeyboardEventByKeyCode"] = function findKeyboardEventByKeyCode(keyCode, code) {
  const self = this;
  let closure_0 = keyCode;
  let closure_1 = code;
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
      let obj = { keyCode: null, key: null, code: null };
      obj[0] = tmp9;
      let tmp10;
      if (null != tmp) {
        let toLocaleLowerCaseResult1 = tmp;
        if (null != tmp) {
          toLocaleLowerCaseResult1 = tmp.toLocaleLowerCase();
        }
        tmp10 = toLocaleLowerCaseResult1;
      }
      obj[1] = tmp10;
      obj[2] = result;
      return obj;
    }
  } else if (null != keyCode) {
    const cachedKeyMapEntries = self.cachedKeyMapEntries;
    const found = cachedKeyMapEntries.find((arg0) => {
      let tmp;
      [, tmp] = arg0;
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
      obj = { keyCode: null, key: null, code: null };
      obj[0] = keyCode;
      let tmp7;
      if (null != first) {
        let toLocaleLowerCaseResult2 = first;
        if (null != first) {
          toLocaleLowerCaseResult2 = first.toLocaleLowerCase();
        }
        tmp7 = toLocaleLowerCaseResult2;
      }
      obj[1] = tmp7;
      obj[2] = result1;
      return obj;
    }
  }
};
let c17 = null;
let c18 = null;
let result = set.fileFinishedImporting("utils/web/KeyboardLayoutMapUtils.tsx");

export const BACKTICK_CODES = set;
export const DefaultKeyboardLayout = frozen;
export { normalizeKeyMap };
export { initializeKeyboardMapper };
export const __DEV_overrideLayoutMapKey = function __DEV_overrideLayoutMapKey(arg0, arg1) {
  set._set(arg0, arg1);
  if (c17 != null) {
    const result = c17._initializeInternalLayoutMap();
  }
  if (c17 != null) {
    c17.updateCaches();
  }
};
export { getKeyboardMapper };
export const resetKeyboardMapper = function resetKeyboardMapper() {
  const self = this;
  const apply = _resetKeyboardMapper.apply;
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
    let layoutMap = set;
  } else {
    if (null == c17) {
      let tmp3 = null;
      if (null == promise) {
        let closure_0;
        closure_0 = callback2((arg0) => {
          let closure_0 = arg0;
          let c3 = 0;
          let c4 = 0;
          return (function*(arg0) {
            if (c4 === 2) {
              c4 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
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
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let _slicedToArray = tmp5;
                    let closure_1 = tmp2;
                    c3 = 1;
                    c4 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer1_11();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  const outer1_17 = new outer1_16(outer1_6);
                  const _document = document;
                  const listener = document.addEventListener("keydown", (arg0) => {
                    try {
                      let obj = closure_17;
                      if (closure_17 != null) {
                        obj.addEvent(arg0);
                      }
                    } catch (tmp4) {
                      obj = { event: null, error: null };
                      obj[0] = tmp;
                      obj[1] = tmp4;
                      logger.error("KeyboardMapper - Error adding event", obj);
                    }
                  });
                  callback();
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp17) {
                c4 = tmp;
                throw tmp17;
              }
            }
          })();
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
      layoutMap = set;
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
        let closure_0;
        closure_0 = callback2((arg0) => {
          let closure_0 = arg0;
          let c3 = 0;
          let c4 = 0;
          return (function*(arg0) {
            if (c4 === 2) {
              c4 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
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
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let _slicedToArray = tmp5;
                    let closure_1 = tmp2;
                    c3 = 1;
                    c4 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer1_11();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  const outer1_17 = new outer1_16(outer1_6);
                  const _document = document;
                  const listener = document.addEventListener("keydown", (arg0) => {
                    try {
                      let obj = closure_17;
                      if (closure_17 != null) {
                        obj.addEvent(arg0);
                      }
                    } catch (tmp4) {
                      obj = { event: null, error: null };
                      obj[0] = tmp;
                      obj[1] = tmp4;
                      logger.error("KeyboardMapper - Error adding event", obj);
                    }
                  });
                  callback();
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp17) {
                c4 = tmp;
                throw tmp17;
              }
            }
          })();
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
export const getKeyboardEventShapeFromKey = function getKeyboardEventShapeFromKey(toLocaleLowerCase) {
  let tmp2;
  if (null != toLocaleLowerCase) {
    tmp2 = normalizeKey(toLocaleLowerCase);
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
        const tmp16Result = tmp16();
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
          ({ keyCode: obj2[0], key: obj2[1], code: obj2[2] } = keyboardEvent);
          return getNormalizedEvent({ keyCode: null, key: null, code: null });
        }
      } catch (err) {
        return tmp;
      }
    }
    tmp16 = getKeyboardMapper;
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
        ({ keyCode: obj3[0], key: obj3[1], code: obj3[2] } = keyboardEvent);
        return getNormalizedEvent(obj);
      }
    } catch (err) {
      return tmp;
    }
  }
};