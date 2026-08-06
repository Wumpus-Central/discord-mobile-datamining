// _runtime/00652_EventEmitter.js
class EventEmitter {
  constructor() {
    self = this;
    init = EventEmitter.init;
    call = init.call;
    if (typeof call === "unknown") {
      initResult = init();
    } else {
      callResult = call(self);
    }
    return;
  }
}
function _addListener(_events, type, fn, arg3) {
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof fn);
    throw typeError;
  } else {
    _events = _events._events;
    if (undefined === _events) {
      const _Object = Object;
      const obj = Object.create(null);
      _events._events = obj;
      _events._eventsCount = 0;
      _events = obj;
    } else {
      if (undefined !== _events.newListener) {
        let listener = fn;
        if (fn.listener) {
          listener = fn.listener;
        }
        _events.emit("newListener", type, listener);
        _events = _events._events;
      }
      let arr = _events[type];
    }
    if (undefined === arr) {
      _events[type] = fn;
      _events._eventsCount = _events._eventsCount + 1;
    } else if (typeof arr === "function") {
      const items = [, ];
      if (arg3) {
        items[0] = fn;
        items[1] = arr;
        let tmp7 = items;
      } else {
        items[0] = arr;
        items[1] = fn;
        tmp7 = items;
      }
      _events[type] = tmp7;
    } else {
      if (arg3) {
        arr = arr.unshift(fn);
        let arr2 = arr;
      } else {
        arr = arr.push(fn);
        arr2 = arr;
      }
      if (undefined === _events._maxListeners) {
        let _maxListeners = EventEmitter.defaultMaxListeners;
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
            const error = new Error(`Possible EventEmitter memory leak detected. ${arr2.length}` + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            error.name = "MaxListenersExceededWarning";
            error.emitter = _events;
            error.type = type;
            error.count = arr2.length;
            let warn = console;
            if (console) {
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
    const target = self.target;
    target.removeListener(self.type, self.wrapFn);
    self.fired = true;
    if (0 === arguments.length) {
      const listener2 = self.listener;
      const call = listener2.call;
      const target2 = self.target;
      typeof call === "unknown" ? listener2() : call(target2);
    } else {
      const listener = self.listener;
      return listener(...arguments);
    }
  }
}
function _listeners(_events, arg1, arg2) {
  _events = _events._events;
  if (undefined === _events) {
    return [];
  } else {
    let items1 = _events[arg1];
    if (undefined === items1) {
      let items = [];
    } else if (typeof items1 === "function") {
      if (arg2) {
        items1 = [];
        items1[0] = items1.listener || items1;
        let items2 = items1;
        const tmp10 = items1.listener || items1;
      } else {
        items2 = [items1];
      }
    } else if (arg2) {
      const _Array2 = Array;
      let array = new Array(items1.length);
      let num3 = 0;
      items = array;
      if (0 < array.length) {
        do {
          let listener = items1[num3].listener;
          let tmp9 = num3;
          if (!listener) {
            listener = items1[num3];
          }
          array[num3] = listener;
          num3 = num3 + 1;
          items = array;
        } while (num3 < array.length);
      }
    } else {
      const _Array = Array;
      array = new Array(length);
      let num = 0;
      items = array;
      if (0 < items1.length) {
        do {
          array[num] = items1[num];
          num = num + 1;
          items = array;
        } while (num < length);
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
    } else if (undefined !== arr) {
      return arr.length;
    }
  }
  return 0;
}
if (typeof Reflect === "object") {
  class EventEmitter {
    constructor() {
      self = this;
      init = EventEmitter.init;
      call = init.call;
      if (typeof call === "unknown") {
        initResult = init();
      } else {
        callResult = call(self);
      }
      return;
    }
  }
}
if (null) {
  class EventEmitter {
    constructor() {
      self = this;
      init = EventEmitter.init;
      call = init.call;
      if (typeof call === "unknown") {
        initResult = init();
      } else {
        callResult = call(self);
      }
      return;
    }
  }
  if (tmp) {
    class EventEmitter {
      constructor() {
        self = this;
        init = EventEmitter.init;
        call = init.call;
        if (typeof call === "unknown") {
          initResult = init();
        } else {
          callResult = call(self);
        }
        return;
      }
      static init() {
        self = this;
        tmp = undefined !== this._events;
        if (tmp) {
          tmp2 = globalThis;
          _Object = Object;
          tmp = self._events !== Object.getPrototypeOf(self)._events;
        }
        if (!tmp) {
          tmp3 = globalThis;
          _Object2 = Object;
          tmp4 = null;
          self._events = Object.create(null);
          num = 0;
          self._eventsCount = 0;
        }
        self._maxListeners = self._maxListeners || undefined;
        return;
      }
      setMaxListeners(arg0) {
        if (typeof global === "number") {
          num = 0;
          if (global >= 0) {
            tmp = NumberIsNaN;
            if (!NumberIsNaN(global)) {
              self = this;
              this._maxListeners = global;
              return this;
            }
          }
        }
        rangeError = new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + global + ".");
        throw rangeError;
      }
      getMaxListeners() {
        if (undefined === this._maxListeners) {
          tmp2 = EventEmitter;
          _maxListeners = EventEmitter.defaultMaxListeners;
        } else {
          _maxListeners = tmp._maxListeners;
        }
        return _maxListeners;
      }
      emit(arg0) {
        items = [];
        num = 1;
        if (1 < arguments.length) {
          do {
            arr = items.push(arguments[num]);
            num = num + 1;
            length = arguments.length;
          } while (num < length);
        }
        self = this;
        tmp2 = "error" === global;
        _events = this._events;
        if (undefined !== _events) {
          tmp4 = tmp2;
          if (tmp2) {
            tmp4 = undefined === _events.error;
          }
          tmp3 = tmp4;
        } else {
          tmp3 = tmp2;
          if (!tmp2) {
            flag = false;
            return false;
          }
        }
        if (tmp3) {
          num4 = 0;
          first = undefined;
          if (items.length > 0) {
            first = items[0];
          }
          tmp10 = globalThis;
          _Error = Error;
          if (first instanceof Error) {
            throw first;
          } else {
            str = "";
            if (first) {
              str2 = " (";
              str3 = ")";
              str = `${" (" + tmp9.message})`;
            }
            tmp11 = new.target;
            str4 = "Unhandled error.";
            tmp12 = new.target;
            error = new Error("Unhandled error." + str);
            tmp14 = error;
            error.context = first;
            throw error;
          }
        } else {
          arr2 = _events[global];
          if (undefined === arr2) {
            flag3 = false;
            return false;
          } else {
            if (typeof arr2 === "function") {
              tmp7 = apply;
              tmp8 = apply(arr2, self, items);
            } else {
              length2 = arr2.length;
              tmp15 = globalThis;
              _Array = Array;
              tmp16 = new.target;
              tmp17 = new.target;
              tmp18 = length2;
              array = new Array(length2);
              tmp20 = array;
              num5 = 0;
              for (let num2 = 0; num2 < length2; num2 = num2 + 1) {
                array[num2] = arr2[num2];
              }
              for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
                tmp5 = apply;
                tmp6 = apply(array[num3], self, items);
              }
            }
            flag2 = true;
            return true;
          }
        }
      }
      addListener(arg0, arg1) {
        tmp = _addListener(this, global, require, false);
        return this;
      }
      prependListener(arg0, arg1) {
        tmp = _addListener(this, global, require, true);
        return this;
      }
      once(arg0, arg1) {
        if (typeof require !== "function") {
          tmp = globalThis;
          _TypeError = TypeError;
          tmp2 = new.target;
          str = "The \"listener\" argument must be of type Function. Received type ";
          tmp3 = new.target;
          typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof require);
          tmp5 = typeError;
          throw typeError;
        } else {
          self = this;
          tmp6 = global;
          obj = { fired: false, wrapFn: "a", target: null, type: null, listener: null };
          obj[2] = this;
          obj[3] = global;
          obj[4] = require;
          tmp7 = onceWrapper;
          bindResult = onceWrapper.bind(obj);
          bindResult.listener = require;
          obj.wrapFn = bindResult;
          onResult = this.on(global, bindResult);
          return this;
        }
      }
      prependOnceListener(arg0, arg1) {
        if (typeof require !== "function") {
          tmp = globalThis;
          _TypeError = TypeError;
          tmp2 = new.target;
          str = "The \"listener\" argument must be of type Function. Received type ";
          tmp3 = new.target;
          typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof require);
          tmp5 = typeError;
          throw typeError;
        } else {
          self = this;
          tmp6 = global;
          obj = { fired: false, wrapFn: "a", target: null, type: null, listener: null };
          obj[2] = this;
          obj[3] = global;
          obj[4] = require;
          tmp7 = onceWrapper;
          bindResult = onceWrapper.bind(obj);
          bindResult.listener = require;
          obj.wrapFn = bindResult;
          prependListenerResult = this.prependListener(global, bindResult);
          return this;
        }
      }
      removeListener(arg0, arg1) {
        if (typeof require !== "function") {
          tmp14 = globalThis;
          _TypeError = TypeError;
          tmp15 = new.target;
          str3 = "The \"listener\" argument must be of type Function. Received type ";
          tmp16 = new.target;
          typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof require);
          tmp18 = typeError;
          throw typeError;
        } else {
          self = this;
          _events = this._events;
          if (undefined === _events) {
            return self;
          } else {
            tmp19 = global;
            arr = _events[global];
            if (undefined === arr) {
              return self;
            } else {
              if (arr !== require) {
                if (arr.listener !== require) {
                  if (typeof arr !== "function") {
                    num3 = 1;
                    diff = arr.length - 1;
                    num4 = 0;
                    num5 = -1;
                    num = -1;
                    if (0 <= diff) {
                      tmp3 = diff;
                      while (arr[diff] !== require) {
                        if (arr[diff].listener === require) {
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
                      return self;
                    } else {
                      if (0 === num) {
                        arr = arr.shift();
                      } else {
                        if (num + 1 < arr.length) {
                          do {
                            sum = num + 1;
                            arr[num] = arr[sum];
                            num = sum;
                            length = arr.length;
                            sum1 = sum + 1;
                          } while (sum1 < length);
                        }
                        arr1 = arr.pop();
                      }
                      if (1 === arr.length) {
                        _events[global] = arr[0];
                      }
                      if (undefined !== _events.removeListener) {
                        if (!listener) {
                          listener = require;
                        }
                        str = "removeListener";
                        emitResult = self.emit("removeListener", global, listener);
                      }
                    }
                  }
                }
                return self;
              }
              diff1 = self._eventsCount - 1;
              self._eventsCount = diff1;
              num2 = 0;
              if (0 == diff1) {
                tmp12 = globalThis;
                _Object = Object;
                tmp13 = null;
                self._events = Object.create(null);
              } else {
                delete tmp[tmp2];
                if (_events.removeListener) {
                  listener2 = arr.listener;
                  if (!listener2) {
                    listener2 = require;
                  }
                  str2 = "removeListener";
                  emitResult1 = self.emit("removeListener", global, listener2);
                }
              }
            }
          }
        }
        return;
      }
      removeAllListeners(arg0) {
        self = this;
        _events = this._events;
        if (undefined === _events) {
          return self;
        } else {
          tmp17 = global;
          if (undefined === _events.removeListener) {
            num4 = 0;
            if (0 === arguments.length) {
              tmp15 = globalThis;
              _Object4 = Object;
              tmp16 = null;
              self._events = Object.create(null);
              self._eventsCount = 0;
            } else if (undefined !== _events[global]) {
              diff = self._eventsCount - 1;
              self._eventsCount = diff;
              if (0 == diff) {
                tmp13 = globalThis;
                _Object3 = Object;
                tmp14 = null;
                self._events = Object.create(null);
              } else {
                delete tmp2[tmp];
              }
            }
            return self;
          } else {
            num5 = 0;
            if (0 === arguments.length) {
              tmp6 = globalThis;
              _Object = Object;
              keys = Object.keys(_events);
              num2 = 1;
              str = "removeListener";
              for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
                tmp7 = keys[num3];
                tmp8 = num3;
                if ("removeListener" !== tmp7) {
                  removeAllListenersResult = self.removeAllListeners(tmp7);
                }
              }
              removeAllListenersResult1 = self.removeAllListeners("removeListener");
              _Object2 = Object;
              tmp11 = null;
              self._events = Object.create(null);
              self._eventsCount = 0;
              return self;
            } else {
              arr = _events[global];
              if (typeof arr === "function") {
                removeListenerResult = self.removeListener(global, arr);
              } else if (undefined !== arr) {
                num = 1;
                diff1 = arr.length - 1;
                if (0 <= diff1) {
                  do {
                    removeListenerResult1 = self.removeListener(global, arr[diff1]);
                    diff1 = diff1 - 1;
                  } while (0 <= diff1);
                }
              }
              return self;
            }
          }
        }
      }
      listeners(arg0) {
        return _listeners(this, global, true);
      }
      rawListeners(arg0) {
        return _listeners(this, global, false);
      }
      static listenerCount(arg0, arg1) {
        if (typeof global.listenerCount === "function") {
          listenerCountResult = global.listenerCount(require);
        } else {
          call = listenerCount.call;
          if (typeof call === "unknown") {
            _events = global._events;
            num = 0;
            if (undefined !== _events) {
              arr = _events[require];
              num = 1;
              if (typeof arr !== "function") {
                num = 0;
                if (undefined !== arr) {
                  num = arr.length;
                }
              }
            }
            listenerCountResult = num;
          } else {
            listenerCountResult = call(global, require);
          }
        }
        return listenerCountResult;
      }
      eventNames() {
        if (this._eventsCount > 0) {
          tmp2 = ownKeys;
          items = ownKeys(tmp._events);
        } else {
          items = [];
        }
        return items;
      }
    }
    let c0 = tmp2;
    const _Number = Number;
    module.exports = EventEmitter;
    module.exports.once = function once(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      return new Promise((arg0, arg1) => {
        let obj = arg0;
        let error = arg1;
        function errorListener(arg0) {
          obj.removeListener(error, obj);
          error(arg0);
        }
        function resolver() {
          if (typeof obj.removeListener === "function") {
            obj.removeListener("error", errorListener);
          }
          const slice = [].slice;
          const call = slice.call;
          if (typeof call === "unknown") {
            let substr = slice();
          } else {
            substr = call(arguments);
          }
          obj(substr);
        }
        obj = resolver;
        obj = { once: true };
        errorListener = resolver;
        if (typeof obj.on === "function") {
          if (obj.once) {
            obj.once(tmp, resolver);
          } else {
            obj.on(tmp, resolver);
          }
        } else if (typeof obj.addEventListener !== "function") {
          const _TypeError = TypeError;
          const typeError = new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof obj);
          throw typeError;
        } else {
          function wrapListener(arg0) {
            if (obj.once) {
              const removed = obj.removeEventListener(error, wrapListener2);
            }
            errorListener(arg0);
          }
          let wrapListener2 = wrapListener;
          const listener = obj.addEventListener(tmp, wrapListener);
        }
        if ("error" !== error) {
          if (typeof obj.on === "function") {
            obj = { once: true };
            error = "error";
            if (typeof obj.on === "function") {
              if (obj.once) {
                obj.once("error", errorListener);
              } else {
                obj.on("error", errorListener);
              }
            } else if (typeof obj.addEventListener !== "function") {
              const _TypeError2 = TypeError;
              const typeError1 = new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof obj);
              throw typeError1;
            } else {
              wrapListener2 = function wrapListener(arg0) {
                if (obj.once) {
                  const removed = obj.removeEventListener(error, wrapListener2);
                }
                errorListener(arg0);
              };
              const listener1 = obj.addEventListener("error", wrapListener2);
            }
          }
        }
      });
    };
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = undefined;
    class ReflectApply {
      constructor(arg0, arg1, arg2) {
        apply = Function.prototype.apply;
        call = apply.call;
        return typeof call === "unknown" ? apply(require, importDefault) : call(global, require, importDefault);
      }
    }
    let c4 = 10;
    let _Object2 = Object;
    let obj = { enumerable: true, get: null, set: null };
    obj[1] = function get() {
      return c4;
    };
    obj[2] = function set(num) {
      if (typeof num === "number") {
        if (num >= 0) {
          if (!tmp3(num)) {
            let closure_4 = num;
          }
        }
      }
      const rangeError = new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + num + ".");
      throw rangeError;
    };
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
  constructor(arg0, arg1, arg2) {
    apply = Function.prototype.apply;
    call = apply.call;
    return typeof call === "unknown" ? apply(require, importDefault) : call(global, require, importDefault);
  }
}