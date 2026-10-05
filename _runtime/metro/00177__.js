// === Module 177: ? ===

// Module 177
function noop() {

}
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
      self._x = 0;
      self._y = 0;
      self._z = null;
      self._A = null;
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
      const constructor = new self.constructor(function(arg0, arg1) {
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
          obj3._x = 0;
          obj3._y = 0;
          obj3._z = null;
          obj3._A = null;
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
        obj3._x = 0;
        obj3._y = 0;
        obj3._z = null;
        obj3._A = null;
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
function handle(_y, _A) {
  let tmp = _y;
  let tmp2 = _y;
  if (3 === _y._y) {
    do {
      _z = tmp._z;
      tmp = _z;
      tmp2 = _z;
      _y = _z._y;
    } while (3 === _y);
  }
  if (Promise._B) {
    Promise._B(tmp2);
  }
  if (0 === tmp2._y) {
    if (0 === tmp2._x) {
      tmp2._x = 1;
      tmp2._A = _A;
    } else if (1 === tmp2._x) {
      let num2 = 2;
      tmp2._x = 2;
      const items = [tmp2._A, _A];
      tmp2._A = items;
    } else {
      _A = tmp2._A;
      _A.push(_A);
    }
    return tmp7;
  } else {
    _z = _A;
    const _setImmediate = setImmediate;
    setImmediate(() => {
      let length;
      let length2;
      let onRejected;
      let tmp2;
      function tryCallOne(onRejected, _z) {
        try {
          return onRejected(_z);
        } catch (tmp3) {
          closure_1 = tmp3;
          return closure_1_2;
        }
      }
      if (1 === _z._y) {
        const tmp3 = _z;
        onRejected = _z.onFulfilled;
        tmp2 = _z;
      } else {
        tmp2 = _z;
        onRejected = _z.onRejected;
      }
      if (null !== onRejected) {
        const tmp11 = tryCallOne(onRejected, _z._z);
        if (tmp11 === closure_2) {
          tmp2.promise._y = 2;
          tmp2.promise._z = _z;
          if (Promise._C) {
            Promise._C(tmp2.promise, tmp15);
          }
          if (1 === tmp2.promise._x) {
            handle(tmp2.promise, tmp2.promise._A);
            tmp2.promise._A = null;
          }
          if (2 === tmp2.promise._x) {
            let num6 = 0;
            if (0 < tmp2.promise._A.length) {
              do {
                let tmp20 = handle(promise, promise._A[num6]);
                num6 = num6 + 1;
                length2 = promise._A.length;
              } while (num6 < length2);
            }
            tmp2.promise._A = null;
          }
        } else {
          resolve(tmp2.promise, tmp11);
        }
      } else if (1 === _z._y) {
        resolve(tmp2.promise, _z._z);
      } else {
        _z = tmp._z;
        tmp2.promise._y = 2;
        tmp2.promise._z = _z;
        if (Promise._C) {
          Promise._C(tmp2.promise, _z);
        }
        if (1 === tmp2.promise._x) {
          handle(tmp2.promise, tmp2.promise._A);
          tmp2.promise._A = null;
        }
        if (2 === tmp2.promise._x) {
          let num2 = 0;
          if (0 < tmp2.promise._A.length) {
            do {
              let tmp8 = handle(promise2, promise2._A[num2]);
              num2 = num2 + 1;
              length = promise2._A.length;
            } while (num2 < length);
          }
          tmp2.promise._A = null;
        }
      }
    });
  }
}
function resolve(_x, _z) {
  let length;
  let length2;
  let length3;
  let length4;
  function getThen(_z) {
    try {
      return _z.then;
    } catch (tmp2) {
      closure_1 = tmp2;
      return closure_1_2;
    }
  }
  if (_z === _x) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("A promise cannot be resolved with itself.");
    _x._y = 2;
    _x._z = typeError;
    if (Promise._C) {
      Promise._C(_x, typeError);
    }
    if (1 === _x._x) {
      handle(_x, _x._A);
      _x._A = null;
    }
    if (2 === _x._x) {
      let num18 = 0;
      if (0 < _x._A.length) {
        do {
          let tmp33 = handle(_x, _x._A[num18]);
          num18 = num18 + 1;
          length4 = _x._A.length;
        } while (num18 < length4);
      }
      _x._A = null;
    }
  } else {
    if (_z) {
      if (typeof _z === "object") {
        const obj = getThen(_z);
        if (obj === closure_2) {
          _x._y = 2;
          _x._z = _z;
          if (Promise._C) {
            Promise._C(_x, tmp17);
          }
          if (1 === _x._x) {
            handle(_x, _x._A);
            _x._A = null;
          }
          if (2 === _x._x) {
            let num13 = 0;
            if (0 < _x._A.length) {
              do {
                let tmp23 = handle(_x, _x._A[num13]);
                num13 = num13 + 1;
                length3 = _x._A.length;
              } while (num13 < length3);
            }
            _x._A = null;
          }
        } else {
          if (obj === _x.then) {
            if (_z instanceof Promise) {
              _x._y = 3;
              _x._z = _z;
              if (1 === _x._x) {
                handle(_x, _x._A);
                _x._A = null;
              }
              if (2 === _x._x) {
                let num10 = 0;
                if (0 < _x._A.length) {
                  do {
                    let tmp15 = handle(_x, _x._A[num10]);
                    num10 = num10 + 1;
                    length2 = _x._A.length;
                  } while (num10 < length2);
                }
                _x._A = null;
              }
            }
          }
          if (typeof obj === "function") {
            doResolve(obj.bind(_z), _x);
          }
        }
      }
    }
    _x._y = 1;
    _x._z = _z;
    if (1 === _x._x) {
      handle(_x, _x._A);
      _x._A = null;
    }
    if (2 === _x._x) {
      let num6 = 0;
      if (0 < _x._A.length) {
        do {
          let tmp7 = handle(_x, _x._A[num6]);
          num6 = num6 + 1;
          length = _x._A.length;
        } while (num6 < length);
      }
      _x._A = null;
    }
  }
}
function Handler(fn, fn2, promise) {

}
function doResolve(arg0, _x) {
  let length;
  let tmp;
  _z = false;
  const tmp2 = _z || tmp !== closure_2;
  if (!tmp2) {
    _z = true;
    _x._y = 2;
    _x._z = _z;
    if (Promise._C) {
      Promise._C(_x, tmp4);
    }
    if (1 === _x._x) {
      handle(_x, _x._A);
      _x._A = null;
    }
    if (2 === _x._x) {
      let num3 = 0;
      if (0 < _x._A.length) {
        do {
          let tmp10 = handle(_x, _x._A[num3]);
          num3 = num3 + 1;
          length = _x._A.length;
        } while (num3 < length);
      }
      _x._A = null;
    }
  }
}
let c1 = null;
let closure_2 = {};
Promise._B = null;
Promise._C = null;
Promise._D = noop;

export default Promise;