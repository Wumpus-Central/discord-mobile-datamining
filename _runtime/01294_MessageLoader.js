// _runtime/01294_MessageLoader.js
import closure_3 from "metro/00032__slicedToArray.js";
import closure_4 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const MessageLoader = require;
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
class MessageLoader {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_4(this, self);
    this.messages = {};
    this.localeImportMap = global;
    this.supportedLocales = Object.keys(global);
    this.defaultLocale = require;
    this._localeLoadingPromises = {};
    this._parseCache = {};
    set = new Set();
    this._subscribers = set;
    internalIntlMessage = new require("serializeAst").InternalIntlMessage([], this.defaultLocale);
    this.fallbackMessage = internalIntlMessage;
    if (closure_1.hot) {
      _Object = Object;
      _loop = function _loop(arg0) {
        closure_0 = arg0;
        hot = hot.hot;
        hot.accept(hot, () => closure_2_5(closure_0, undefined, undefined, function() {
          self = this;
          c2 = 0;
          c3 = 0;
          return (function*() {
            if (c3 === 2) {
              c3 = 3;
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
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    closure_1 = self;
                    c2 = 1;
                    c3 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = self._loadLocale(self);
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_1._parseCache = {};
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp8) {
                c3 = tmp;
                throw tmp8;
              }
            }
          })();
        }));
      };
      entries = Object.entries(global);
      tmp5 = entries;
      tmp6 = entries[Symbol.iterator]();
      num = 2;
      num2 = 0;
      tmp7 = entries;
      tmp9 = tmp6;
      while (tmp6 !== undefined) {
        tmp10 = closure_3;
        tmp11 = closure_3(tmp8, 2);
        closure_1 = tmp11[1];
        _loopResult = require("_slicedToArray");
        continue;
      }
    }
    return;
  }
}
let items = [
  {
    key: "withDebugValues",
    value: function withDebugValues(arg0, arg1) {

    }
  },
  {
    key: "fallbackWith",
    value: function fallbackWith($$loader) {
      const self = this;
      let self2 = this;
      if (null != this) {
        const _parentLoader = self2._parentLoader;
        while (_parentLoader !== self) {
          self2 = _parentLoader;
        }
        const _Error = Error;
        error = new Error("Setting `fallbackWith` on MessageLoader created a circular chain that would never resolve");
        throw error;
      }
      self.fallbackLoader = $$loader;
      $$loader._parentLoader = self;
    }
  },
  {
    key: "get",
    value: function get(arg0, defaultLocale) {
      const self = this;
      const messageValue = this.getMessageValue(arg0, defaultLocale);
      if (null != messageValue) {
        return messageValue;
      } else {
        if (self.isLocaleLoading(defaultLocale)) {
          if (!self.isLocaleLoaded(self.defaultLocale)) {
            return self.fallbackMessage;
          }
        }
        const messageValue1 = self.getMessageValue(arg0, self.defaultLocale);
        if (null != messageValue1) {
          return messageValue1;
        } else {
          const fallbackLoader = self.fallbackLoader;
          let value;
          if (null !== fallbackLoader) {
            if (undefined !== fallbackLoader) {
              value = fallbackLoader.get(arg0, defaultLocale);
            }
          }
          if (null != value) {
            return value;
          } else {
            let combined = arg0;
            if (null != self._debugKeyMap) {
              const _HermesInternal = HermesInternal;
              combined = "\"" + self._debugKeyMap[arg0] + "\" (" + arg0 + ")";
            }
            let combined1 = defaultLocale;
            if (null != self._localeFileMap) {
              const _HermesInternal2 = HermesInternal;
              combined1 = "" + defaultLocale + " (" + self._localeFileMap[defaultLocale] + ")";
            }
            if (null != self._localeFileMap) {
              const _HermesInternal3 = HermesInternal;
              defaultLocale = "" + self.defaultLocale + " (" + self._localeFileMap[self.defaultLocale] + ")";
            } else {
              defaultLocale = self.defaultLocale;
            }
            const _console = console;
            const _HermesInternal4 = HermesInternal;
            console.warn("Requested message " + combined + " does not have a value in the requested locale " + combined1 + " nor the default locale " + defaultLocale);
            return self.fallbackMessage;
          }
        }
      }
    }
  },
  {
    key: "getMessageValue",
    value: function getMessageValue(arg0, defaultLocale) {
      const self = this;
      let tmp2;
      if (null !== this._parseCache[defaultLocale]) {
        if (undefined !== tmp) {
          tmp2 = tmp[arg0];
        }
      }
      if (tmp2) {
        return tmp2;
      } else if (null != self.messages[defaultLocale]) {
        if (null != self.messages[defaultLocale][arg0]) {
          const internalIntlMessage = new MessageLoader(1293).InternalIntlMessage(tmp4, defaultLocale);
          const _parseCache = self._parseCache;
          let tmp12 = _parseCache[defaultLocale];
          if (null === tmp12) {
            const obj = {};
            _parseCache[defaultLocale] = obj;
            tmp12 = obj;
          }
          tmp12[arg0] = internalIntlMessage;
          return internalIntlMessage;
        }
      } else {
        const supportedLocales = self.supportedLocales;
        if (supportedLocales.includes(defaultLocale)) {
          self._loadLocale(defaultLocale);
        }
      }
    }
  },
  {
    key: "_loadLocale",
    value: function _loadLocale(c0) {
      closure_0 = c0;
      return fn(this, undefined, undefined, function() {
        const self = this;
        c5 = 0;
        c6 = 0;
        return (function*() {
          if (c6 === 2) {
            c6 = 3;
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
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_3 = self;
                  closure_4 = tmp2;
                  if (null == self.messages[self]) {
                    let current;
                    if (null !== tmp38._localeLoadingPromises[self]) {
                      if (undefined !== tmp42) {
                        current = tmp42.current;
                      }
                    }
                    if (null == current) {
                      if (null != tmp38.localeImportMap[self]) {
                        const localeImportMap = tmp38.localeImportMap;
                        const tmp25 = localeImportMap[self]();
                        let initialized;
                        if (null !== tmp38._localeLoadingPromises[self]) {
                          if (undefined !== tmp27) {
                            initialized = tmp27.initialized;
                          }
                        }
                        let tmp29 = null !== initialized;
                        if (tmp29) {
                          tmp29 = undefined !== initialized;
                        }
                        if (tmp29) {
                          tmp29 = initialized;
                        }
                        obj1 = { initialized: null, current: null };
                        obj1[0] = tmp29;
                        obj1[1] = tmp25;
                        tmp38._localeLoadingPromises[self] = obj1;
                        const messages = tmp38.messages;
                        closure_1 = self;
                        c5 = 1;
                        c6 = 1;
                        const obj2 = { value: null, done: false };
                        obj2[0] = tmp25;
                        return obj2;
                      } else {
                        const supportedLocales = tmp38.supportedLocales;
                        if (supportedLocales.includes(self)) {
                          const _Error = Error;
                          const _HermesInternal = HermesInternal;
                          error = new Error("Requested to load locale " + self + ", which should be supported, but no source for translation data was provided.");
                          throw error;
                        }
                      }
                    } else {
                      let current1;
                      if (null !== tmp38._localeLoadingPromises[self]) {
                        if (undefined !== tmp14) {
                          current1 = tmp14.current;
                        }
                      }
                      c5 = 2;
                      c6 = 1;
                      const obj3 = { value: null, done: false };
                      obj3[0] = current1;
                      return obj3;
                    }
                  }
                  c6 = 3;
                }
              } else if (1 === tmp5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  messages[closure_1] = arg1.default;
                  closure_3._localeLoadingPromises[self] = { initialized: true, current: "a" };
                  closure_3.emitChange();
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } catch (tmp32) {
              c6 = tmp;
              throw tmp32;
            }
          }
        })();
      });
    }
  },
  {
    key: "emitChange",
    value: function emitChange() {
      const _subscribers = this._subscribers;
      const values = _subscribers.values();
      for (const item10008 of values) {
        let item10008Result = item10008();
        continue;
      }
    }
  },
  {
    key: "onChange",
    value: function onChange(arg0) {
      const self = this;
      closure_0 = arg0;
      let _subscribers = this._subscribers;
      _subscribers.add(arg0);
      return () => {
        const _subscribers = self._subscribers;
        return _subscribers.delete(closure_0);
      };
    }
  },
  {
    key: "isLocaleLoading",
    value: function isLocaleLoading(defaultLocale) {
      let current;
      if (null !== this._localeLoadingPromises[defaultLocale]) {
        if (undefined !== tmp) {
          current = tmp.current;
        }
      }
      return null != current;
    }
  },
  {
    key: "isLocaleLoaded",
    value: function isLocaleLoaded(currentLocale) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = 0 != tmp.initialized;
      }
      if (tmp2) {
        let tmp3 = !flag;
        if (flag) {
          tmp3 = null == tmp.current;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
  },
  {
    key: "waitForLocaleLoaded",
    value: function waitForLocaleLoaded(defaultLocale, flag) {
      return fn(this, arguments, undefined, function(arg0) {
        const self = this;
        closure_1 = arg0;
        closure_2 = arg1;
        c5 = 0;
        c6 = 0;
        const iter = (function*(arg0) {
          if (c6 === 2) {
            c6 = 3;
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
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_4 = closure_0;
                  closure_3 = tmp2;
                  let flag;
                  closure_0 = flag;
                  flag = ref;
                  if (ref === undefined) {
                    flag = false;
                  }
                  ref = undefined;
                  c5 = 1;
                  c6 = 1;
                  return { value: "PX_16", done: null };
                }
              } else {
                if (1 === tmp5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    obj1 = { value: null, done: true };
                    obj1[0] = arg1;
                    return obj1;
                  } else {
                    ref = closure_4._localeLoadingPromises[closure_0];
                    if (null == ref) {
                      c6 = 3;
                      const obj2 = { value: null, done: true };
                      obj2[0] = closure_4._loadLocale(closure_0);
                      return obj2;
                    } else {
                      let initialized = ref.initialized;
                      if (initialized) {
                        initialized = !flag;
                      }
                      if (!initialized) {
                        c5 = 2;
                        c6 = 1;
                        const obj3 = { value: null, done: false };
                        obj3[0] = ref.current;
                        return obj3;
                      }
                    }
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                }
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp17) {
              c6 = tmp;
              throw tmp17;
            }
          }
        })();
        iter.next();
        return iter;
      });
    }
  },
  {
    key: "waitForDefaultLocale",
    value: function waitForDefaultLocale() {
      return fn(this, arguments, undefined, function() {
        const self = this;
        closure_1 = arg0;
        c4 = 0;
        c5 = 0;
        const iter = (function*() {
          closure_3 = flag;
          closure_2 = tmp2;
          flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          yield "PX_16";
          return closure_3.waitForLocaleLoaded(closure_3.defaultLocale, flag);
        })();
        iter.next();
        return iter;
      });
    }
  }
];
const _moduleResult = _createClass(MessageLoader, items);
let closure_7 = [];

export const loadAllMessagesInLocale = function loadAllMessagesInLocale(closure_0) {
  return fn(this, undefined, undefined, function*() {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 1;
            c0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = Promise.all(closure_1_7.map((_loadLocale) => _loadLocale._loadLocale(c0)));
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c0 = tmp;
        throw tmp7;
      }
    }
  });
};
export const waitForAllDefaultIntlMessagesLoaded = function waitForAllDefaultIntlMessagesLoaded() {
  return fn(this, undefined, undefined, function*() {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 1;
            c0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = Promise.all(closure_1_7.map((waitForDefaultLocale) => waitForDefaultLocale.waitForDefaultLocale()));
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c0 = tmp;
        throw tmp7;
      }
    }
  });
};
export const createLoader = function createLoader(arg0, arg1) {
  const tmp = new closure_6(arg0, arg1);
  return tmp;
};
export const MessageLoader = _moduleResult;