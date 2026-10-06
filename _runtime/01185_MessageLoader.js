// _runtime/01185_MessageLoader.js
import InternalIntlMessage from "01184_InternalIntlMessage.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

let c0, c1, closure_2, closure_4, messages;

let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          fn(done.value);
        } else {
          let tmp1 = done.value;
          const value = tmp1;
          if (!(tmp1 instanceof Promise)) {
            const self = this;
            const self2 = this;
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      const tmp = iter;
      const apply = iter.apply;
      const tmp2 = closure_0;
      if (!closure_1) {
        items = [];
      }
      iter = apply(tmp2, items);
      const iter2 = iter.next();
      let value = iter2.value;
      if (iter2.done) {
        const tmp5 = fn(value);
      } else {
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          let self = this;
          let self2 = this;
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
    return _Promise1;
  };
}
class MessageLoader {
  constructor(localeImportMap, defaultLocale) {
    let self = this;
    _classCallCheck(this, MessageLoader);
    this.messages = {};
    this.localeImportMap = localeImportMap;
    this.supportedLocales = Object.keys(localeImportMap);
    this.defaultLocale = defaultLocale;
    this._localeLoadingPromises = {};
    this._parseCache = {};
    this._subscribers = new Set();
    new Set();
    const internalIntlMessage = new InternalIntlMessage.InternalIntlMessage([], this.defaultLocale);
    this.fallbackMessage = internalIntlMessage;
    if (module.hot) {
      const _Object = Object;
      function _loop(arg0) {
        let closure_0 = arg0;
        hot = hot.hot;
        hot.accept(hot, () =>
          closure_3_5(self, undefined, undefined, function () {
            self = this;
            let c2 = 0;
            let c3 = 0;
            return (function* (arg0) {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  return { value, done: true };
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c3 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      return { value, done: true };
                    } else {
                      closure_1 = self;
                      c2 = 1;
                      c3 = 1;
                      const obj4 = { value: self._loadLocale(closure_2_0), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    return { value, done: true };
                  } else {
                    closure_1._parseCache = {};
                    c3 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp7) {
                  c3 = 3;
                  throw tmp7;
                }
              }
            })();
          }),
        );
      }
      const entries = Object.entries(localeImportMap);
      const tmp6 = entries[Symbol.iterator]();
      const tmp7 = entries;
      while (tmp6 !== undefined) {
        let tmp11 = _slicedToArray(tmp8, 2);
        let closure_1 = tmp11[1];
        let _loopResult = _loop(tmp11[0]);
        continue;
      }
    }
  }
}
const entry = {
  key: "withDebugValues",
  value: function withDebugValues(arg0, arg1) {},
};
let items = [
  entry,
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
        const self3 = this;
        const self4 = this;
        const error = new Error(
          "Setting `fallbackWith` on MessageLoader created a circular chain that would never resolve",
        );
        throw error;
      }
      self.fallbackLoader = $$loader;
      $$loader._parentLoader = self;
    },
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
              combined = '"' + self._debugKeyMap[arg0] + '" (' + arg0 + ")";
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
            console.warn(
              "Requested message " +
                combined +
                " does not have a value in the requested locale " +
                combined1 +
                " nor the default locale " +
                defaultLocale,
            );
            return self.fallbackMessage;
          }
        }
      }
    },
  },
  {
    key: "getMessageValue",
    value: function getMessageValue(arg0, defaultLocale) {
      const self = this;
      let tmp2;
      if (null !== this._parseCache[defaultLocale]) {
        if (undefined !== this._parseCache[defaultLocale]) {
          tmp2 = tmp[arg0];
        }
      }
      if (tmp2) {
        return tmp2;
      } else if (null != self.messages[defaultLocale]) {
        if (null != self.messages[defaultLocale][arg0]) {
          const self2 = this;
          const self3 = this;
          const internalIntlMessage = new InternalIntlMessage.InternalIntlMessage(tmp4, defaultLocale);
          const _parseCache = self._parseCache;
          let tmp10 = _parseCache[defaultLocale];
          if (null === tmp10) {
            const obj = {};
            _parseCache[defaultLocale] = obj;
            tmp10 = obj;
          }
          tmp10[arg0] = internalIntlMessage;
          return internalIntlMessage;
        }
      } else {
        const supportedLocales = self.supportedLocales;
        if (supportedLocales.includes(defaultLocale)) {
          self._loadLocale(defaultLocale);
        }
      }
    },
  },
  {
    key: "_loadLocale",
    value: function _loadLocale(defaultLocale) {
      let closure_0 = defaultLocale;
      return fn(this, undefined, undefined, function () {
        let self = this;
        let c5 = 0;
        let c6 = 0;
        return (function* (arg0) {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else {
                  closure_3 = self;
                  closure_4 = tmp;
                  if (null == self.messages[closure_0]) {
                    let current;
                    if (null !== self._localeLoadingPromises[closure_0]) {
                      if (undefined !== self._localeLoadingPromises[closure_0]) {
                        current = tmp37.current;
                      }
                    }
                    if (null == current) {
                      if (null != self.localeImportMap[closure_0]) {
                        const localeImportMap = tmp33.localeImportMap;
                        const tmp22 = localeImportMap[closure_0]();
                        let initialized;
                        if (null !== self._localeLoadingPromises[closure_0]) {
                          if (undefined !== self._localeLoadingPromises[closure_0]) {
                            initialized = tmp24.initialized;
                          }
                        }
                        const obj4 = {
                          initialized: null !== initialized && undefined !== initialized && initialized,
                          current: tmp22,
                        };
                        self._localeLoadingPromises[closure_0] = obj4;
                        messages = tmp33.messages;
                        closure_1 = closure_0;
                        c5 = 1;
                        c6 = 1;
                        return { value: tmp22, done: false };
                      } else {
                        const supportedLocales = tmp33.supportedLocales;
                        if (supportedLocales.includes(closure_0)) {
                          const _Error = Error;
                          const _HermesInternal = HermesInternal;
                          self = this;
                          const self2 = this;
                          const error = new Error(
                            "Requested to load locale " +
                              closure_0 +
                              ", which should be supported, but no source for translation data was provided.",
                          );
                          throw error;
                        }
                      }
                    } else {
                      let current1;
                      if (null !== self._localeLoadingPromises[closure_0]) {
                        if (undefined !== self._localeLoadingPromises[closure_0]) {
                          current1 = tmp13.current;
                        }
                      }
                      c5 = 2;
                      c6 = 1;
                      return { value: current1, done: false };
                    }
                  }
                }
              } else if (1 === tmp4) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else {
                  messages[closure_1] = value.default;
                  closure_3._localeLoadingPromises[closure_132_0] = { initialized: true, current: "a" };
                  closure_3.emitChange();
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp29) {
              c6 = 3;
              throw tmp29;
            }
          }
        })();
      });
    },
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
    },
  },
  {
    key: "onChange",
    value: function onChange(arg0) {
      const self = this;
      let closure_0 = arg0;
      let _subscribers = this._subscribers;
      _subscribers.add(arg0);
      return () => {
        const _subscribers = self._subscribers;
        return _subscribers.delete(closure_0);
      };
    },
  },
  {
    key: "isLocaleLoading",
    value: function isLocaleLoading(defaultLocale) {
      let current;
      if (null !== this._localeLoadingPromises[defaultLocale]) {
        if (undefined !== this._localeLoadingPromises[defaultLocale]) {
          current = tmp.current;
        }
      }
      return null != current;
    },
  },
  {
    key: "isLocaleLoaded",
    value: function isLocaleLoaded(currentLocale) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      let tmp2 = null != tmp && 0 != tmp.initialized;
      if (tmp2) {
        let tmp3 = !flag;
        if (flag) {
          tmp3 = null == tmp.current;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    },
  },
  {
    key: "waitForLocaleLoaded",
    value: function waitForLocaleLoaded(defaultLocale) {
      return fn(this, arguments, undefined, function (arg0) {
        let closure_3;
        const self = this;
        let closure_1 = arg0;
        const ref = arg1;
        let c5 = 0;
        let c6 = 0;
        const iter = (function* (arg0) {
          let flag;
          if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else if (null == closure_4._localeLoadingPromises[closure_0]) {
              c6 = 3;
              const obj5 = { value: closure_4._loadLocale(closure_0), done: true };
              return obj5;
            } else {
              const initialized = ref.initialized && !flag;
              if (!initialized) {
                c5 = 2;
                c6 = 1;
                return { value: closure_4._localeLoadingPromises[closure_0].current, done: false };
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          }
          yield "IconComponent";
          closure_4 = self;
          closure_0 = closure_1;
          flag = ref;
          if (ref === undefined) {
            flag = false;
          }
          return "Reflect";
        })();
        iter.next();
        return iter;
      });
    },
  },
  {
    key: "waitForDefaultLocale",
    value: function waitForDefaultLocale() {
      return fn(this, arguments, undefined, function () {
        const self = this;
        let closure_1 = arg0;
        let c4 = 0;
        let c5 = 0;
        const iter = (function* (arg0) {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let flag;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                } else {
                  closure_3 = self;
                  closure_2 = tmp;
                  flag = closure_1;
                  if (closure_1 === undefined) {
                    flag = false;
                  }
                  c4 = 1;
                  c5 = 1;
                  return { value: "Reflect", done: true };
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                c5 = 3;
                const obj = { value: closure_3.waitForLocaleLoaded(closure_3.defaultLocale, flag), done: true };
                return obj;
              }
            } catch (tmp9) {
              c5 = 3;
              throw tmp9;
            }
          }
        })();
        iter.next();
        return iter;
      });
    },
  },
];
const _moduleResult = _createClass(MessageLoader, items);
const metroRequire = _moduleResult;
let closure_7 = [];
const MessageLoader_export = _moduleResult;

export const loadAllMessagesInLocale = function loadAllMessagesInLocale(arg0) {
  let closure_0 = arg0;
  return fn(this, undefined, undefined, function* () {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c1 = 1;
            c0 = 1;
            const obj4 = {
              value: Promise.all(closure_1_7.map((_loadLocale) => _loadLocale._loadLocale(closure_1_0))),
              done: false,
            };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp6) {
        c0 = 3;
        throw tmp6;
      }
    }
  });
};
export const waitForAllDefaultIntlMessagesLoaded = function waitForAllDefaultIntlMessagesLoaded() {
  return fn(this, undefined, undefined, function* () {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c1 = 1;
            c0 = 1;
            const obj4 = {
              value: Promise.all(
                closure_2_7.map((waitForDefaultLocale) => waitForDefaultLocale.waitForDefaultLocale()),
              ),
              done: false,
            };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp6) {
        c0 = 3;
        throw tmp6;
      }
    }
  });
};
export const createLoader = function createLoader(View, constructResult) {
  const tmp = new metroRequire(View, constructResult);
  closure_7.push(tmp);
  return tmp;
};
export { MessageLoader_export as MessageLoader };
