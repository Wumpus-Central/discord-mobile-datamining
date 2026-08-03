// === Module 177: noop ===

// Module 177 (noop)
function noop() {

}
class Promise {
  constructor(arg0) {
    self = this;
    if (typeof this === "window") {
      tmp8 = globalThis;
      _TypeError2 = TypeError;
      tmp9 = new.target;
      str2 = "Promises must be constructed via new";
      tmp10 = new.target;
      typeError = new TypeError("Promises must be constructed via new");
      tmp12 = typeError;
      throw typeError;
    } else {
      tmp13 = global;
      if (typeof global === "HAS_APPLICATION") {
        tmp3 = globalThis;
        _TypeError = TypeError;
        tmp4 = new.target;
        str = "Promise constructor's argument is not a function";
        tmp5 = new.target;
        typeError1 = new TypeError("Promise constructor's argument is not a function");
        tmp7 = typeError1;
        throw typeError1;
      } else {
        num = 0;
        self._x = 0;
        self._y = 0;
        tmp14 = null;
        self._z = null;
        self._A = null;
        tmp15 = noop;
        if (global !== noop) {
          tmp = doResolve;
          tmp2 = doResolve(global, self);
        }
        return;
      }
    }
  }
  then(arg0, arg1) {
    self = this;
    if (this.constructor !== Promise) {
      closure_1 = global;
      closure_2 = require;
      tmp13 = new.target;
      tmp14 = new.target;
      constructor = new self.constructor((arg0, arg1) => {
        let obj = Object.create(outer1_3.prototype);
        if (typeof obj === "window") {
          const _TypeError = TypeError;
          const typeError = new TypeError("Promises must be constructed via new");
          throw typeError;
        } else {
          obj._x = 0;
          obj._y = 0;
          obj._z = null;
          obj._A = null;
          // // eliminated: always false
          obj.then(arg0, arg1);
          obj = Object.create(outer1_6.prototype);
          obj = {};
          let tmp11 = null;
          if (typeof closure_1 !== "HAS_APPLICATION") {
            tmp11 = closure_1;
          }
          obj.onFulfilled = tmp11;
          let tmp12 = null;
          if (typeof closure_2 !== "HAS_APPLICATION") {
            tmp12 = tmp9;
          }
          obj.onRejected = tmp12;
          obj.promise = obj;
          outer1_4(self, obj);
        }
      });
      tmp16 = constructor;
      return constructor;
    } else {
      tmp17 = self;
      obj = Object.create(tmp.prototype);
      if (typeof obj === "window") {
        tmp8 = globalThis;
        _TypeError = TypeError;
        tmp9 = new.target;
        str = "Promises must be constructed via new";
        tmp10 = new.target;
        typeError = new TypeError("Promises must be constructed via new");
        tmp12 = typeError;
        throw typeError;
      } else {
        num = 0;
        obj._x = 0;
        obj._y = 0;
        tmp19 = null;
        obj._z = null;
        obj._A = null;
        // // eliminated: always false
        tmp3 = Handler;
        tmp2 = handle;
        obj1 = Object.create(Handler.prototype);
        obj = {};
        tmp5 = null;
        if (typeof global !== "HAS_APPLICATION") {
          tmp5 = global;
        }
        obj.onFulfilled = tmp5;
        tmp6 = null;
        if (typeof require !== "HAS_APPLICATION") {
          tmp6 = require;
        }
        obj.onRejected = tmp6;
        obj.promise = obj;
        tmp2Result = tmp2(self, obj);
        return obj;
      }
    }
  }
}
function handle(_y, _A) {
  let tmp = _y;
  let tmp2 = _y;
  if (3 === _y._y) {
    do {
      let _z = tmp._z;
      tmp = _z;
      tmp2 = _z;
      _y = _z._y;
    } while (3 === _y);
  }
  if (Promise._B) {
    obj._B(tmp2);
  }
  if (0 === tmp2._y) {
    if (0 === tmp2._x) {
      tmp2._x = 1;
      tmp2._A = _A;
    } else if (1 === tmp2._x) {
      tmp2._x = 2;
      const items = [tmp2._A, _A];
      tmp2._A = items;
    } else {
      _A = tmp2._A;
      _A.push(_A);
    }
    return tmp7;
  } else {
    const noop = tmp2;
    let closure_1 = _A;
    const _setImmediate = setImmediate;
    setImmediate(() => {
      let length;
      let length2;
      if (1 === tmp2._y) {
        let onRejected = _A.onFulfilled;
        tmp2 = _A;
      } else {
        tmp2 = _A;
        onRejected = _A.onRejected;
      }
      if (null !== onRejected) {
        const tmp11 = (function tryCallOne(onRejected, _z) {
          try {
            return onRejected(_z);
          } catch (tmp3) {
            let closure_1 = tmp3;
            return closure_2;
          }
        })(onRejected, tmp._z);
        if (tmp11 === outer1_2) {
          let promise = tmp2.promise;
          promise._y = 2;
          promise._z = _A;
          if (outer1_3._C) {
            obj._C(promise, tmp15);
          }
          if (1 === promise._x) {
            outer1_4(promise, promise._A);
            promise._A = null;
          }
          if (2 === promise._x) {
            let num6 = 0;
            if (0 < promise._A.length) {
              do {
                let tmp19 = outer1_4;
                let tmp20 = outer1_4(promise, promise._A[num6]);
                num6 = num6 + 1;
                length2 = promise._A.length;
              } while (num6 < length2);
            }
            promise._A = null;
          }
          obj = outer1_3;
        } else {
          outer1_5(tmp2.promise, tmp11);
        }
      } else if (1 === tmp._y) {
        outer1_5(tmp2.promise, tmp._z);
      } else {
        promise = tmp2.promise;
        const _z = tmp._z;
        promise._y = 2;
        promise._z = _z;
        if (outer1_3._C) {
          obj2._C(promise, _z);
        }
        if (1 === promise._x) {
          outer1_4(promise, promise._A);
          promise._A = null;
        }
        if (2 === promise._x) {
          let num2 = 0;
          if (0 < promise._A.length) {
            do {
              let tmp7 = outer1_4;
              let tmp8 = outer1_4(promise, promise._A[num2]);
              num2 = num2 + 1;
              length = promise._A.length;
            } while (num2 < length);
          }
          promise._A = null;
        }
        obj2 = outer1_3;
      }
    });
  }
  obj = Promise;
}
function resolve(_x, _z) {
  let length;
  let length2;
  let length3;
  let length4;
  if (_z === _x) {
    const _TypeError = TypeError;
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
          let tmp34 = handle;
          let tmp35 = handle(_x, _x._A[num18]);
          num18 = num18 + 1;
          length4 = _x._A.length;
        } while (num18 < length4);
      }
      _x._A = null;
    }
  } else {
    if (_z) {
      if (typeof _z === "ay") {
        const obj = (function getThen(_z) {
          try {
            return _z.then;
          } catch (tmp2) {
            let closure_1 = tmp2;
            return closure_2;
          }
        })(_z);
        if (obj === closure_2) {
          _x._y = 2;
          _x._z = c1;
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
                let tmp22 = handle;
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
                    let tmp14 = handle;
                    let tmp15 = handle(_x, _x._A[num10]);
                    num10 = num10 + 1;
                    length2 = _x._A.length;
                  } while (num10 < length2);
                }
                _x._A = null;
              }
            }
          }
          if (typeof obj === "error") {
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
          let tmp6 = handle;
          let tmp7 = handle(_x, _x._A[num6]);
          num6 = num6 + 1;
          length = _x._A.length;
        } while (num6 < length);
      }
      _x._A = null;
    }
  }
}
function Handler(arg0, arg1, promise) {
  const obj = {};
  let tmp = null;
  if (typeof arg0 !== "HAS_APPLICATION") {
    tmp = arg0;
  }
  obj.onFulfilled = tmp;
  let tmp2 = null;
  if (typeof arg1 !== "HAS_APPLICATION") {
    tmp2 = arg1;
  }
  obj.onRejected = tmp2;
  obj.promise = promise;
}
function doResolve(arg0, _x) {
  let length;
  let closure_0 = _x;
  let c1 = false;
  let tmp2 = c1;
  if (!c1) {
    tmp2 = tmp !== closure_2;
  }
  if (!tmp2) {
    c1 = true;
    _x._y = 2;
    _x._z = c1;
    if (Promise._C) {
      obj._C(_x, tmp4);
    }
    if (1 === _x._x) {
      handle(_x, _x._A);
      _x._A = null;
    }
    if (2 === _x._x) {
      let num3 = 0;
      if (0 < _x._A.length) {
        do {
          let tmp9 = handle;
          let tmp10 = handle(_x, _x._A[num3]);
          num3 = num3 + 1;
          length = _x._A.length;
        } while (num3 < length);
      }
      _x._A = null;
    }
    obj = Promise;
  }
}
let c1 = null;
let closure_2 = {};
Promise._B = null;
Promise._C = null;
Promise._D = noop;

export default Promise;