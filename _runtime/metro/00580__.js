// === Module 580: ? ===

// Module 580
let tmp2;
class EventEmitter {
  constructor() {
    const init = EventEmitter.init;
    init.call(this);
  }
}
function _addListener(_events, type, listener, arg3) {
  if (typeof listener !== "function") {
    const _TypeError = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof listener);
    throw typeError;
  } else {
    _events = _events._events;
    if (undefined === _events) {
      const _Object = Object;
      const obj = Object.create(null);
      _events._events = obj;
      _events._eventsCount = 0;
      _events = obj;
    } else if (undefined !== _events.newListener) {
      const emit = _events.emit;
      if (listener.listener) {
        listener = listener.listener;
      }
      emit("newListener", type, listener);
      _events = _events._events;
    }
    if (undefined === arr) {
      _events[type] = listener;
      _events._eventsCount = _events._eventsCount + 1;
    } else {
      let arr2;
      let _maxListeners;
      if (typeof arr === "function") {
        let tmp7;
        const items = [, ];
        if (arg3) {
          items[0] = listener;
          items[1] = arr;
          tmp7 = items;
        } else {
          items[0] = arr;
          items[1] = listener;
          tmp7 = items;
        }
        _events[type] = tmp7;
        arr2 = tmp7;
      } else if (arg3) {
        arr.unshift(listener);
        arr2 = arr;
      } else {
        arr.push(listener);
        arr2 = arr;
      }
      if (undefined === _events._maxListeners) {
        _maxListeners = EventEmitter.defaultMaxListeners;
      } else {
        _maxListeners = _events._maxListeners;
      }
      if (_maxListeners > 0) {
        if (arr2.length > _maxListeners) {
          if (!arr2.warned) {
            arr2.warned = true;
            const _Error = Error;
            const _String = String;
            const text = `Possible EventEmitter memory leak detected. ${arr2.length}`;
            const self = this;
            const self2 = this;
            const error = new Error(`Possible EventEmitter memory leak detected. ${arr2.length}` + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            error.name = "MaxListenersExceededWarning";
            error.emitter = _events;
            error.type = type;
            error.count = arr2.length;
            let warn = console;
            if (warn) {
              const _console = console;
              warn = console.warn;
            }
            if (warn) {
              const _console2 = console;
              console.warn(error);
            }
          }
        }
      }
    }
    return _events;
  }
}
function onceWrapper() {
  const self = this;
  if (!this.fired) {
    let callResult;
    const target = self.target;
    target.removeListener(self.type, self.wrapFn);
    self.fired = true;
    if (0 === arguments.length) {
      const listener2 = self.listener;
      callResult = listener2.call(self.target);
    } else {
      const listener = self.listener;
      callResult = listener(...arguments);
    }
    return callResult;
  }
}
function _listeners(_events, arg1, arg2) {
  _events = _events._events;
  if (undefined === _events) {
    return [];
  } else {
    let items;
    if (undefined === _events[arg1]) {
      items = [];
    } else if (typeof _events[arg1] === "function") {
      let items2;
      if (arg2) {
        const items1 = [];
        const tmp6 = _events[arg1].listener || _events[arg1];
        items1[0] = tmp6;
        items2 = items1;
      } else {
        items2 = [_events[arg1]];
      }
      items = items2;
    } else if (arg2) {
      const _Array2 = Array;
      const self3 = this;
      const self4 = this;
      const array = new Array(arr5.length);
      let num3 = 0;
      items = array;
      if (0 < array.length) {
        do {
          let listener = arr5[num3].listener;
          if (!listener) {
            listener = arr5[num3];
          }
          array[num3] = listener;
          num3 = num3 + 1;
          items = array;
        } while (num3 < array.length);
      }
    } else {
      const _Array = Array;
      const self = this;
      const self2 = this;
      const array2 = new Array(length);
      let num = 0;
      items = array2;
      if (0 < _events[arg1].length) {
        do {
          array2[num] = arr5[num];
          num = num + 1;
          items = array2;
        } while (num < _events[arg1].length);
      }
    }
    return items;
  }
}
function listenerCount(arg0) {
  const _events = this._events;
  if (undefined !== _events) {
    if (typeof _events[arg0] === "function") {
      return 1;
    } else if (undefined !== _events[arg0]) {
      return _events[arg0].length;
    }
  }
  return 0;
}
let tmp = null;
if (typeof Reflect === "object") {
  class EventEmitter {
    constructor() {
      const init = EventEmitter.init;
      init.call(this);
    }
  }
}
if (tmp) {
  class EventEmitter {
    constructor() {
      const init = EventEmitter.init;
      init.call(this);
    }
  }
  if (tmp) {
    class EventEmitter {
      constructor() {
        const init = EventEmitter.init;
        init.call(this);
      }
      static init() {
        const self = this;
        let tmp = undefined !== this._events;
        if (tmp) {
          const _Object = Object;
          tmp = self._events !== Object.getPrototypeOf(self)._events;
        }
        if (!tmp) {
          const _Object2 = Object;
          self._events = Object.create(null);
          self._eventsCount = 0;
        }
        self._maxListeners = self._maxListeners || undefined;
      }
      setMaxListeners(_maxListeners) {
        if (typeof _maxListeners === "number") {
          if (_maxListeners >= 0) {
            if (!closure_2(_maxListeners)) {
              const self = this;
              this._maxListeners = _maxListeners;
              return this;
            }
          }
        }
        const rangeError = new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + _maxListeners + ".");
        throw rangeError;
      }
      getMaxListeners() {
        let _maxListeners;
        if (undefined === this._maxListeners) {
          _maxListeners = EventEmitter.defaultMaxListeners;
        } else {
          _maxListeners = tmp._maxListeners;
        }
        return _maxListeners;
      }
      emit(arg0) {
        let length;
        let tmp3;
        const items = [];
        let num = 1;
        if (1 < arguments.length) {
          do {
            let arr = items.push(arguments[num]);
            num = num + 1;
            length = arguments.length;
          } while (num < length);
        }
        const self = this;
        const _events = this._events;
        if (undefined !== _events) {
          tmp3 = "error" === arg0 && undefined === _events.error;
        } else {
          tmp3 = tmp2;
          if (!tmp3) {
            return false;
          }
        }
        if (tmp3) {
          let first;
          if (items.length > 0) {
            first = items[0];
          }
          const _Error = Error;
          if (first instanceof Error) {
            throw first;
          } else {
            let str = "";
            const _Error2 = Error;
            if (first) {
              str = `${" (" + tmp9.message})`;
            }
            const self2 = this;
            const self3 = this;
            const _Error21 = new _Error2("Unhandled error." + str);
            _Error21.context = first;
            throw _Error21;
          }
        } else if (undefined === _events[arg0]) {
          return false;
        } else {
          if (typeof _events[arg0] === "function") {
            ReflectApply(_events[arg0], self, items);
          } else {
            let num2;
            let num3;
            const _Array = Array;
            const self4 = this;
            const self5 = this;
            const array = new Array(length2);
            for (let num2 = 0; num2 < length2; num2 = num2 + 1) {
              array[num2] = arr2[num2];
            }
            for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
              let tmp6 = ReflectApply(array[num3], self, items);
            }
          }
          return true;
        }
      }
      addListener(type, listener) {
        _addListener(this, type, listener, false);
        return this;
      }
      prependListener(type, bindResult) {
        _addListener(this, type, bindResult, true);
        return this;
      }
      once(type, listener) {
        let bindResult;
        if (typeof listener !== "function") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof listener);
          throw typeError;
        } else {
          const self3 = this;
          const on = this.on;
          const obj = { fired: false, wrapFn: bindResult, target: this, type, listener };
          bindResult = onceWrapper.bind(obj);
          bindResult.listener = listener;
          on(type, bindResult);
          return this;
        }
      }
      prependOnceListener(type, listener) {
        let bindResult;
        if (typeof listener !== "function") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof listener);
          throw typeError;
        } else {
          const self3 = this;
          const prependListener = this.prependListener;
          const obj = { fired: false, wrapFn: bindResult, target: this, type, listener };
          bindResult = onceWrapper.bind(obj);
          bindResult.listener = listener;
          prependListener(type, bindResult);
          return this;
        }
      }
      removeListener(arg0, fn) {
        let length;
        let sum1;
        if (typeof fn !== "function") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof fn);
          throw typeError;
        } else {
          const self3 = this;
          const _events = this._events;
          if (undefined === _events) {
            return self3;
          } else if (undefined === _events[arg0]) {
            return self3;
          } else {
            if (_events[arg0] !== fn) {
              if (_events[arg0].listener !== fn) {
                if (typeof _events[arg0] !== "function") {
                  let listener;
                  let diff = arr.length - 1;
                  let num = -1;
                  if (0 <= diff) {
                    while (_events[arg0][diff] !== fn) {
                      if (arr[diff].listener === fn) {
                        break;
                      } else {
                        diff = diff - 1;
                        num = -1;
                      }
                    }
                    listener = arr[diff].listener;
                    num = diff;
                  }
                  if (num < 0) {
                    return self3;
                  } else {
                    if (0 === num) {
                      _events[arg0].shift();
                    } else {
                      if (num + 1 < _events[arg0].length) {
                        do {
                          let sum = num + 1;
                          arr[num] = arr[sum];
                          num = sum;
                          length = arr.length;
                          sum1 = sum + 1;
                        } while (sum1 < length);
                      }
                      _events[arg0].pop();
                    }
                    if (1 === _events[arg0].length) {
                      _events[arg0] = _events[arg0][0];
                    }
                    if (undefined !== _events.removeListener) {
                      const emit = self3.emit;
                      if (!listener) {
                        listener = fn;
                      }
                      emit("removeListener", arg0, listener);
                    }
                  }
                }
              }
              return self3;
            }
            const diff1 = self3._eventsCount - 1;
            self3._eventsCount = diff1;
            if (0 == diff1) {
              const _Object = Object;
              self3._events = Object.create(null);
            } else {
              delete _events[tmp15];
              if (_events.removeListener) {
                let listener2 = arr.listener;
                const emit2 = self3.emit;
                if (!listener2) {
                  listener2 = fn;
                }
                emit2("removeListener", arg0, listener2);
              }
            }
          }
        }
      }
      removeAllListeners(arg0) {
        const self = this;
        const _events = this._events;
        if (undefined === _events) {
          return self;
        } else if (undefined === _events.removeListener) {
          if (0 === arguments.length) {
            const _Object4 = Object;
            self._events = Object.create(null);
            self._eventsCount = 0;
          } else if (undefined !== _events[arg0]) {
            const diff = self._eventsCount - 1;
            self._eventsCount = diff;
            if (0 == diff) {
              const _Object3 = Object;
              self._events = Object.create(null);
            } else {
              delete _events[tmp15];
            }
          }
          return self;
        } else if (0 === arguments.length) {
          let num3;
          const _Object = Object;
          const keys = Object.keys(_events);
          for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
            let tmp5 = keys[num3];
            if ("removeListener" !== tmp5) {
              let removeAllListenersResult = self.removeAllListeners(tmp5);
            }
          }
          self.removeAllListeners("removeListener");
          const _Object2 = Object;
          self._events = Object.create(null);
          self._eventsCount = 0;
          return self;
        } else {
          if (typeof _events[arg0] === "function") {
            self.removeListener(arg0, _events[arg0]);
          } else if (undefined !== _events[arg0]) {
            let diff1 = arr.length - 1;
            if (0 <= diff1) {
              do {
                let removeListenerResult1 = self.removeListener(arg0, arr[diff1]);
                diff1 = diff1 - 1;
              } while (0 <= diff1);
            }
          }
          return self;
        }
      }
      listeners(arg0) {
        return _listeners(this, arg0, true);
      }
      rawListeners(arg0) {
        return _listeners(this, arg0, false);
      }
      static listenerCount(listenerCount, arg1) {
        let listenerCountResult;
        if (typeof listenerCount.listenerCount === "function") {
          listenerCountResult = listenerCount.listenerCount(arg1);
        } else {
          listenerCountResult = listenerCount.call(listenerCount, arg1);
        }
        return listenerCountResult;
      }
      eventNames() {
        let items;
        if (this._eventsCount > 0) {
          items = ownKeys(tmp._events);
        } else {
          items = [];
        }
        return items;
      }
    }
    const ownKeys = tmp2;
    const _Number = Number;
    let tmp3 = Number.isNaN || (function NumberIsNaN(arg0) {
      return arg0 != arg0;
    });
    let closure_2 = tmp3;
    module.exports = EventEmitter;
    module.exports.once = function once(arg0, arg1) {
      let on = arg0;
      let closure_1 = arg1;
      const promise = new Promise(function(arg0, arg1) {
        let closure_0;
        const wrapListener3 = function wrapListener(event) {
          if (obj3.once) {
            const removed = obj.removeEventListener(error_str, wrapListener2);
          }
          errorListener(event);
        };
        on = arg0;
        closure_1 = arg1;
        function errorListener(event) {
          on.removeListener(closure_1, resolver);
          closure_1(event);
        }
        function resolver() {
          if (typeof on.removeListener === "function") {
            on.removeListener("error", errorListener);
          }
          const slice = [].slice;
          on(slice.call(arguments));
        }
        const obj = on;
        const obj2 = { once: true };
        if (typeof on.on === "function") {
          if (obj2.once) {
            obj.once(closure_1, resolver);
          } else {
            obj.on(closure_1, resolver);
          }
        } else if (typeof obj.addEventListener !== "function") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof obj);
          throw typeError;
        } else {
          const wrapListener = wrapListener3;
          const listener = obj.addEventListener(tmp, wrapListener);
        }
        if ("error" !== closure_1) {
          if (typeof obj.on === "function") {
            const obj3 = { once: true };
            const error_str = "error";
            if (typeof obj.on === "function") {
              if (obj3.once) {
                obj.once("error", errorListener);
              } else {
                obj.on("error", errorListener);
              }
            } else if (typeof obj.addEventListener !== "function") {
              const _TypeError2 = TypeError;
              const self3 = this;
              const self4 = this;
              const typeError1 = new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof obj);
              throw typeError1;
            } else {
              const wrapListener2 = wrapListener3;
              const listener1 = obj.addEventListener("error", wrapListener2);
            }
          }
        }
      });
      return promise;
    };
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    let num = 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = undefined;
    class ReflectApply {
      constructor(arr2, self, items) {
        return apply.call(arr2, self, items);
      }
    }
    let c4 = 10;
    let _Object2 = Object;
    let obj = {
      enumerable: true,
      get() {
            return c4;
          },
      set(num) {
            if (typeof num === "number") {
              if (0 >= 0) {
                if (!closure_2(0)) {
                  c4 = num;
                }
              }
            }
            const rangeError = new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + num + ".");
            throw rangeError;
          }
    };
    let str = "defaultMaxListeners";
    Object.defineProperty(EventEmitter, "defaultMaxListeners", obj);
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.listenerCount = listenerCount;
  }
  let _Object = Object;
  tmp2 = Object.getOwnPropertySymbols ? (function ReflectOwnKeys(headers) {
    const ownPropertyNames = Object.getOwnPropertyNames(headers);
    return ownPropertyNames.concat(Object.getOwnPropertySymbols(headers));
  }) : (function ReflectOwnKeys(headers) {
    return Object.getOwnPropertyNames(headers);
  });
}
class ReflectApply {
  constructor(arr2, self, items) {
    return apply.call(arr2, self, items);
  }
}