// _runtime/metro/17553__.js
class Events {
  constructor() {}
}
function EE(fn, context, arg2) {
  let flag = arg2;
  if (!arg2) {
    flag = false;
  }
}
let flag = "~";
let c1 = "~";
let str = "~";
if (Object.create) {
  let _Object = Object;
  class Events {
    constructor() {}
  }
  Events.prototype = Object.create(null);
  if (!Object.create(Events.prototype).__proto__) {
    let flag2 = false;
    class Events {
      constructor() {}
    }
    flag = false;
  }
  str = flag;
}
class EventEmitter {
  constructor() {
    ({ _events: Object.create(Events.prototype), _eventsCount: 0 });
  }
  eventNames() {
    const items = [];
    if (0 === this._eventsCount) {
      return items;
    } else {
      const _events = tmp._events;
      for (const key10004 in _events) {
        if (!hasOwnProperty.call(_events, key10004)) {
          continue;
        } else {
          let substr = key10004;
          let push = items.push;
          if (c1) {
            substr = key10004.slice(1);
          }
          let arr = push(substr);
          continue;
        }
        continue;
      }
      const _Object = Object;
      let combined = items;
      if (Object.getOwnPropertySymbols) {
        const _Object2 = Object;
        combined = items.concat(Object.getOwnPropertySymbols(_events));
      }
      return combined;
    }
  }
  listeners(arg0) {
    let sum = arg0;
    if (c1) {
      sum = c1 + arg0;
    }
    if (this._events[sum]) {
      if (this._events[sum].fn) {
        const items = [this._events[sum].fn];
        return items;
      } else {
        let num;
        const _Array = Array;
        const self = this;
        const self2 = this;
        const array = new Array(length);
        for (let num = 0; num < this._events[sum].length; num = num + 1) {
          array[num] = arr[num].fn;
        }
        return array;
      }
    } else {
      return [];
    }
  }
  listenerCount(arg0) {
    let sum = arg0;
    if (c1) {
      sum = c1 + arg0;
    }
    let num = 0;
    if (this._events[sum]) {
      let num2 = 1;
      if (!this._events[sum].fn) {
        num2 = arr.length;
      }
      num = num2;
    }
    return num;
  }
  emit(arg0, arg1, arg2, arg3, arg4, arg5) {
    let context2;
    let context3;
    let context4;
    let fn7;
    let fn8;
    let fn9;
    let tmp6;
    let sum = arg0;
    if (c1) {
      sum = c1 + arg0;
    }
    const self = this;
    if (this._events[sum]) {
      const length = arguments.length;
      if (self._events[sum].fn) {
        if (self._events[sum].once) {
          self.removeListener(arg0, self._events[sum].fn, undefined, true);
        }
        if (1 === length) {
          const fn12 = self._events[sum].fn;
          fn12.call(self._events[sum].context);
          return true;
        } else if (2 === length) {
          const fn11 = self._events[sum].fn;
          fn11.call(self._events[sum].context, arg1);
          return true;
        } else if (3 === length) {
          const fn10 = self._events[sum].fn;
          fn10.call(self._events[sum].context, arg1, arg2);
          return true;
        } else if (4 === length) {
          ({ fn: fn9, context: context4 } = self._events[sum]);
          fn9.call(context4, arg1, arg2, arg3);
          return true;
        } else if (5 === length) {
          ({ fn: fn8, context: context3 } = self._events[sum]);
          fn8.call(context3, arg1, arg2, arg3, arg4);
          return true;
        } else if (6 === length) {
          ({ fn: fn7, context: context2 } = self._events[sum]);
          fn7.call(context2, arg1, arg2, arg3, arg4, arg5);
          return true;
        } else {
          let num8;
          const _Array2 = Array;
          const self4 = this;
          const self5 = this;
          const array = new Array(length - 1);
          for (let num8 = 1; num8 < length; num8 = num8 + 1) {
            array[num8 - 1] = arguments[num8];
          }
          const fn6 = self._events[sum].fn;
          fn6.apply(self._events[sum].context, array);
        }
      } else {
        let num = 0;
        if (0 < self._events[sum].length) {
          do {
            let tmp12;
            if (arr[num].once) {
              let flag2 = true;
              let removeListenerResult1 = self.removeListener(arg0, arr[num].fn, undefined, true);
            }
            if (1 === length) {
              let fn5 = arr[num].fn;
              let callResult6 = fn5.call(arr[num].context);
              tmp12 = tmp6;
            } else if (2 === length) {
              let fn4 = arr[num].fn;
              let callResult7 = fn4.call(arr[num].context, arg1);
              tmp12 = tmp6;
            } else if (3 === length) {
              let fn3 = arr[num].fn;
              let callResult8 = fn3.call(arr[num].context, arg1, arg2);
              tmp12 = tmp6;
            } else if (4 === length) {
              let fn2 = arr[num].fn;
              let context = arr[num].context;
              let callResult9 = fn2.call(context, arg1, arg2, arg3);
              tmp12 = tmp6;
            } else {
              tmp12 = tmp6;
              if (!tmp12) {
                let _Array = Array;
                let self2 = this;
                let self3 = this;
                let array2 = new Array(length - 1);
                let num6 = 1;
                tmp12 = array2;
                if (1 < length) {
                  do {
                    array2[num6 - 1] = arguments[num6];
                    num6 = num6 + 1;
                    tmp12 = array2;
                  } while (num6 < length);
                }
              }
              let fn = arr[num].fn;
              let applyResult1 = fn.apply(arr[num].context, tmp12);
            }
            num = num + 1;
            tmp6 = tmp12;
          } while (num < self._events[sum].length);
        }
      }
      return true;
    } else {
      return false;
    }
  }
  on(arg0, fn, arg2) {
    if (typeof fn !== "function") {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("The listener must be a function");
      throw typeError;
    } else {
      const self3 = this;
      const tmp = arg2 || self3;
      Object.create(EE.prototype);
      const obj = { fn, context: tmp, once: false };
      let sum = arg0;
      if (c1) {
        sum = c1 + arg0;
      }
      const _events = self3._events;
      if (self3._events[sum]) {
        const _events2 = self3._events;
        if (_events[sum].fn) {
          const items = [self3._events[sum], obj];
          _events2[sum] = items;
        } else {
          const arr = _events2[sum];
          arr.push(obj);
        }
      } else {
        _events[sum] = obj;
        self3._eventsCount = self3._eventsCount + 1;
      }
      return self3;
    }
  }
  once(arg0, fn, arg2) {
    if (typeof fn !== "function") {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("The listener must be a function");
      throw typeError;
    } else {
      const self3 = this;
      const tmp = arg2 || self3;
      Object.create(EE.prototype);
      const obj = { fn, context: tmp, once: true };
      let sum = arg0;
      if (c1) {
        sum = c1 + arg0;
      }
      const _events = self3._events;
      if (self3._events[sum]) {
        const _events2 = self3._events;
        if (_events[sum].fn) {
          const items = [self3._events[sum], obj];
          _events2[sum] = items;
        } else {
          const arr = _events2[sum];
          arr.push(obj);
        }
      } else {
        _events[sum] = obj;
        self3._eventsCount = self3._eventsCount + 1;
      }
      return self3;
    }
  }
  removeListener(arg0, arg1, arg2, arg3) {
    let sum = arg0;
    if (c1) {
      sum = c1 + arg0;
    }
    const self = this;
    if (this._events[sum]) {
      const tmp2 = arg1;
      if (tmp2) {
        let tmp6 = arg3;
        if (self._events[sum].fn) {
          let tmp15 = arr.fn !== arg1;
          if (!tmp15) {
            if (tmp6) {
              tmp6 = !arr.once;
            }
            tmp15 = tmp6;
          }
          if (!tmp15) {
            tmp15 = arg2 && self._events[sum].context !== arg2;
          }
          if (!tmp15) {
            const diff = self._eventsCount - 1;
            self._eventsCount = diff;
            if (0 == diff) {
              self._events = Object.create(Events.prototype);
            } else {
              delete self._events[tmp];
            }
          }
        } else {
          let num4;
          const items = [];
          const length = self._events[sum].length;
          for (let num4 = 0; num4 < length; num4 = num4 + 1) {
            let tmp7 = arr[num4].fn !== arg1;
            if (!tmp7) {
              let tmp9 = tmp6 && !arr[num4].once;
              tmp7 = tmp9;
            }
            if (!tmp7) {
              let tmp10 = arg2 && arr[num4].context !== arg2;
              tmp7 = tmp10;
            }
            if (tmp7) {
              let arr2 = items.push(arr[num4]);
            }
          }
          if (items.length) {
            let first = items;
            const _events = self._events;
            if (1 === items.length) {
              first = items[0];
            }
            _events[sum] = first;
          } else {
            const diff1 = self._eventsCount - 1;
            self._eventsCount = diff1;
            if (0 == diff1) {
              self._events = Object.create(Events.prototype);
            } else {
              delete self._events[tmp];
            }
          }
        }
        return self;
      } else {
        const diff2 = self._eventsCount - 1;
        self._eventsCount = diff2;
        if (0 == diff2) {
          self._events = Object.create(Events.prototype);
        } else {
          delete self._events[tmp];
        }
        return self;
      }
    } else {
      return self;
    }
  }
  removeAllListeners(arg0) {
    const self = this;
    const tmp = arg0;
    if (tmp) {
      let sum = arg0;
      if (c1) {
        sum = c1 + arg0;
      }
      if (self._events[sum]) {
        const diff = self._eventsCount - 1;
        self._eventsCount = diff;
        if (0 == diff) {
          self._events = Object.create(Events.prototype);
        } else {
          delete self._events[tmp3];
        }
      }
    } else {
      self._events = Object.create(Events.prototype);
      self._eventsCount = 0;
    }
    return self;
  }
}
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
EventEmitter.prefixed = str;
EventEmitter.EventEmitter = EventEmitter;
if (undefined !== module) {
  module.exports = EventEmitter;
}
