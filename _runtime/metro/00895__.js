// _runtime/metro/00895__.js
function noop() {}
class Promise {
  constructor(fn) {
    const self = this;
    if (typeof this !== "object") {
      const _TypeError2 = TypeError;
      const self4 = this;
      const self5 = this;
      const typeError = new TypeError("Promises must be constructed via new");
      throw typeError;
    } else if (typeof fn !== "function") {
      const _TypeError = TypeError;
      const self2 = this;
      const self3 = this;
      const typeError1 = new TypeError("Promise constructor's argument is not a function");
      throw typeError1;
    } else {
      self._40 = 0;
      self._65 = 0;
      self._55 = null;
      self._72 = null;
      if (fn !== noop) {
        doResolve(fn, self);
      }
    }
  }
  then(fn, fn2) {
    let tmp5;
    let tmp6;
    let self = this;
    if (this.constructor !== Promise) {
      let closure_1 = fn;
      closure_2 = fn2;
      const self4 = this;
      const self5 = this;
      const constructor = new self.constructor(function (arg0, arg1) {
        let tmp11;
        let tmp12;
        const obj3 = Object.create(Promise.prototype);
        if (typeof obj3 !== "object") {
          const _TypeError = TypeError;
          self = this;
          const self2 = this;
          const typeError = new TypeError("Promises must be constructed via new");
          throw typeError;
        } else {
          obj3._40 = 0;
          obj3._65 = 0;
          obj3._55 = null;
          obj3._72 = null;
          // // eliminated: always false
          obj3.then(arg0, arg1);
          Object.create(Handler.prototype);
          const obj = { onFulfilled: tmp11, onRejected: tmp12, promise: obj3 };
          tmp11 = null;
          const tmp6 = self;
          if (typeof fn === "function") {
            tmp11 = fn;
          }
          tmp12 = null;
          if (typeof fn2 === "function") {
            tmp12 = fn2;
          }
          handle(tmp6, obj);
        }
      });
      let tmp12 = constructor;
      return constructor;
    } else {
      let obj3 = Object.create(tmp.prototype);
      if (typeof obj3 !== "object") {
        let _TypeError = TypeError;
        let self2 = this;
        const self3 = this;
        let typeError = new TypeError("Promises must be constructed via new");
        throw typeError;
      } else {
        obj3._40 = 0;
        obj3._65 = 0;
        obj3._55 = null;
        obj3._72 = null;
        // // eliminated: always false
        Object.create(Handler.prototype);
        let obj = { onFulfilled: tmp5, onRejected: tmp6, promise: obj3 };
        tmp5 = null;
        if (typeof fn === "function") {
          tmp5 = fn;
        }
        tmp6 = null;
        if (typeof fn2 === "function") {
          tmp6 = fn2;
        }
        handle(self, obj);
        return obj3;
      }
    }
  }
}
function handle(_65, _72) {
  let tmp = _65;
  let tmp2 = _65;
  if (3 === _65._65) {
    do {
      _55 = tmp._55;
      tmp = _55;
      tmp2 = _55;
      _65 = _55._65;
    } while (3 === _65);
  }
  if (Promise._37) {
    Promise._37(tmp2);
  }
  if (0 === tmp2._65) {
    if (0 === tmp2._40) {
      tmp2._40 = 1;
      tmp2._72 = _72;
    } else if (1 === tmp2._40) {
      let num2 = 2;
      tmp2._40 = 2;
      const items = [tmp2._72, _72];
      tmp2._72 = items;
    } else {
      _72 = tmp2._72;
      _72.push(_72);
    }
    return tmp7;
  } else {
    _55 = _72;
    const _setImmediate = setImmediate;
    setImmediate(() => {
      let length;
      let length2;
      let onRejected;
      let tmp2;
      function tryCallOne(onRejected, _55) {
        try {
          return onRejected(_55);
        } catch (tmp3) {
          closure_1 = tmp3;
          return closure_1_2;
        }
      }
      if (1 === _55._65) {
        const tmp3 = _55;
        onRejected = _55.onFulfilled;
        tmp2 = _55;
      } else {
        tmp2 = _55;
        onRejected = _55.onRejected;
      }
      if (null !== onRejected) {
        const tmp11 = tryCallOne(onRejected, _55._55);
        if (tmp11 === closure_2) {
          tmp2.promise._65 = 2;
          tmp2.promise._55 = _55;
          if (Promise._87) {
            Promise._87(tmp2.promise, tmp15);
          }
          if (1 === tmp2.promise._40) {
            handle(tmp2.promise, tmp2.promise._72);
            tmp2.promise._72 = null;
          }
          if (2 === tmp2.promise._40) {
            let num6 = 0;
            if (0 < tmp2.promise._72.length) {
              do {
                let tmp20 = handle(promise, promise._72[num6]);
                num6 = num6 + 1;
                length2 = promise._72.length;
              } while (num6 < length2);
            }
            tmp2.promise._72 = null;
          }
        } else {
          resolve(tmp2.promise, tmp11);
        }
      } else if (1 === _55._65) {
        resolve(tmp2.promise, _55._55);
      } else {
        _55 = tmp._55;
        tmp2.promise._65 = 2;
        tmp2.promise._55 = _55;
        if (Promise._87) {
          Promise._87(tmp2.promise, _55);
        }
        if (1 === tmp2.promise._40) {
          handle(tmp2.promise, tmp2.promise._72);
          tmp2.promise._72 = null;
        }
        if (2 === tmp2.promise._40) {
          let num2 = 0;
          if (0 < tmp2.promise._72.length) {
            do {
              let tmp8 = handle(promise2, promise2._72[num2]);
              num2 = num2 + 1;
              length = promise2._72.length;
            } while (num2 < length);
          }
          tmp2.promise._72 = null;
        }
      }
    });
  }
}
function resolve(_40, _55) {
  let length;
  let length2;
  let length3;
  let length4;
  function getThen(_55) {
    try {
      return _55.then;
    } catch (tmp2) {
      closure_1 = tmp2;
      return closure_1_2;
    }
  }
  if (_55 === _40) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("A promise cannot be resolved with itself.");
    _40._65 = 2;
    _40._55 = typeError;
    if (Promise._87) {
      Promise._87(_40, typeError);
    }
    if (1 === _40._40) {
      handle(_40, _40._72);
      _40._72 = null;
    }
    if (2 === _40._40) {
      let num18 = 0;
      if (0 < _40._72.length) {
        do {
          let tmp33 = handle(_40, _40._72[num18]);
          num18 = num18 + 1;
          length4 = _40._72.length;
        } while (num18 < length4);
      }
      _40._72 = null;
    }
  } else {
    if (_55) {
      if (typeof _55 === "object") {
        const obj = getThen(_55);
        if (obj === closure_2) {
          _40._65 = 2;
          _40._55 = _55;
          if (Promise._87) {
            Promise._87(_40, tmp17);
          }
          if (1 === _40._40) {
            handle(_40, _40._72);
            _40._72 = null;
          }
          if (2 === _40._40) {
            let num13 = 0;
            if (0 < _40._72.length) {
              do {
                let tmp23 = handle(_40, _40._72[num13]);
                num13 = num13 + 1;
                length3 = _40._72.length;
              } while (num13 < length3);
            }
            _40._72 = null;
          }
        } else {
          if (obj === _40.then) {
            if (_55 instanceof Promise) {
              _40._65 = 3;
              _40._55 = _55;
              if (1 === _40._40) {
                handle(_40, _40._72);
                _40._72 = null;
              }
              if (2 === _40._40) {
                let num10 = 0;
                if (0 < _40._72.length) {
                  do {
                    let tmp15 = handle(_40, _40._72[num10]);
                    num10 = num10 + 1;
                    length2 = _40._72.length;
                  } while (num10 < length2);
                }
                _40._72 = null;
              }
            }
          }
          if (typeof obj === "function") {
            doResolve(obj.bind(_55), _40);
          }
        }
      }
    }
    _40._65 = 1;
    _40._55 = _55;
    if (1 === _40._40) {
      handle(_40, _40._72);
      _40._72 = null;
    }
    if (2 === _40._40) {
      let num6 = 0;
      if (0 < _40._72.length) {
        do {
          let tmp7 = handle(_40, _40._72[num6]);
          num6 = num6 + 1;
          length = _40._72.length;
        } while (num6 < length);
      }
      _40._72 = null;
    }
  }
}
function Handler(fn, fn2, promise) {}
function doResolve(arg0, _40) {
  let length;
  let tmp;
  _55 = false;
  const tmp2 = _55 || tmp !== closure_2;
  if (!tmp2) {
    _55 = true;
    _40._65 = 2;
    _40._55 = _55;
    if (Promise._87) {
      Promise._87(_40, tmp4);
    }
    if (1 === _40._40) {
      handle(_40, _40._72);
      _40._72 = null;
    }
    if (2 === _40._40) {
      let num3 = 0;
      if (0 < _40._72.length) {
        do {
          let tmp10 = handle(_40, _40._72[num3]);
          num3 = num3 + 1;
          length = _40._72.length;
        } while (num3 < length);
      }
      _40._72 = null;
    }
  }
}
let c1 = null;
let closure_2 = {};
Promise._37 = null;
Promise._87 = null;
Promise._61 = noop;

export default Promise;
