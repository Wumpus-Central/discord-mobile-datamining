// _runtime/metro/01333__.js
class Emitter {
  constructor(arg0) {
    const tmp = arg0;
    if (tmp) {
      for (const key10005 in Emitter.prototype) {
        arg0[key10005] = Emitter.prototype[key10005];
        continue;
      }
      return arg0;
    }
  }
  once(arg0, fn) {
    let closure_0 = arg0;
    let closure_1 = fn;
    function on() {
      this.off(closure_0, on);
      fn(...arguments);
    }
    on.fn = fn;
    this.on(arg0, on);
    return this;
  }
  emit(arg0) {
    let length;
    const self = this;
    const tmp = this._callbacks || {};
    self._callbacks = tmp;
    const array = new Array(arguments.length - 1);
    let num = 1;
    if (1 < arguments.length) {
      do {
        array[num - 1] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    if (self._callbacks["$" + arg0]) {
      let num2 = 0;
      const substr = arr.slice(0);
      if (0 < substr.length) {
        do {
          let obj = substr[num2];
          let applyResult = obj.apply(self, array);
          num2 = num2 + 1;
        } while (num2 < substr.length);
      }
    }
    return self;
  }
  listeners(arg0) {
    const self = this;
    const tmp = this._callbacks || {};
    self._callbacks = tmp;
    return self._callbacks["$" + arg0] || [];
  }
  hasListeners(arg0) {
    return this.listeners(arg0).length;
  }
}
if (undefined !== module) {
  module.exports = Emitter;
}
const fn = function (arg0, arg1) {
  const self = this;
  const tmp = this._callbacks || {};
  self._callbacks = tmp;
  let items = self._callbacks["$" + arg0];
  const _callbacks = self._callbacks;
  const text = `$${arg0}`;
  if (!items) {
    items = [];
  }
  _callbacks[text] = items;
  items.push(arg1);
  return self;
};
Emitter.prototype.addEventListener = fn;
Emitter.prototype.on = fn;
const fn2 = function (arg0, arg1) {
  const self = this;
  self._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    self._callbacks = {};
    return self;
  } else if (self._callbacks["$" + arg0]) {
    if (1 == arguments.length) {
      delete self._callbacks["$" + arg0];
      return self;
    } else {
      let num2 = 0;
      if (0 < self._callbacks["$" + arg0].length) {
        while (self._callbacks["$" + arg0][num2] !== arg1) {
          if (tmp.fn === arg1) {
            break;
          } else {
            num2 = num2 + 1;
          }
        }
        self._callbacks["$" + arg0].splice(num2, 1);
      }
      if (0 === self._callbacks["$" + arg0].length) {
        delete self._callbacks["$" + arg0];
      }
      return self;
    }
  } else {
    return self;
  }
};
Emitter.prototype.removeEventListener = fn2;
Emitter.prototype.removeAllListeners = fn2;
Emitter.prototype.removeListener = fn2;
Emitter.prototype.off = fn2;
