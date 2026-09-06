// === Module 884: noop ===

// Module 884 (noop)
function noop() {

}
class Promise {
  constructor(arg0) {
    self = this;
    if (typeof this !== "object") {
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
      if (typeof global !== "function") {
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
        self._40 = 0;
        self._65 = 0;
        tmp14 = null;
        self._55 = null;
        self._72 = null;
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
        let obj = Object.create(closure_1_3.prototype);
        if (typeof obj !== "object") {
          const _TypeError = TypeError;
          const typeError = new TypeError("Promises must be constructed via new");
          throw typeError;
        } else {
          obj._40 = 0;
          obj._65 = 0;
          obj._55 = null;
          obj._72 = null;
          // // eliminated: always false
          obj.then(arg0, arg1);
          obj = Object.create(closure_1_6.prototype);
          obj = {};
          let tmp11 = null;
          if (typeof closure_1 === "function") {
            tmp11 = closure_1;
          }
          obj.onFulfilled = tmp11;
          let tmp12 = null;
          if (typeof closure_2 === "function") {
            tmp12 = tmp9;
          }
          obj.onRejected = tmp12;
          obj.promise = obj;
          closure_1_4(self, obj);
        }
      });
      tmp16 = constructor;
      return constructor;
    } else {
      tmp17 = self;
      obj = Object.create(tmp.prototype);
      if (typeof obj !== "object") {
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
        obj._40 = 0;
        obj._65 = 0;
        tmp19 = null;
        obj._55 = null;
        obj._72 = null;
        // // eliminated: always false
        tmp3 = Handler;
        tmp2 = handle;
        obj1 = Object.create(Handler.prototype);
        obj = {};
        tmp5 = null;
        if (typeof global === "function") {
          tmp5 = global;
        }
        obj.onFulfilled = tmp5;
        tmp6 = null;
        if (typeof require === "function") {
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
function handle(_65, _72) {
  let tmp = _65;
  let tmp2 = _65;
  if (3 === _65._65) {
    do {
      let _55 = tmp._55;
      tmp = _55;
      tmp2 = _55;
      _65 = _55._65;
    } while (3 === _65);
  }
  if (Promise._37) {
    obj._37(tmp2);
  }
  if (0 === tmp2._65) {
    if (0 === tmp2._40) {
      tmp2._40 = 1;
      tmp2._72 = _72;
    } else if (1 === tmp2._40) {
      tmp2._40 = 2;
      const items = [tmp2._72, _72];
      tmp2._72 = items;
    } else {
      _72 = tmp2._72;
      _72.push(_72);
    }
    return tmp7;
  } else {
    _55 = tmp2;
    closure_1 = _72;
    const _setImmediate = setImmediate;
    setImmediate(() => {
      let length;
      let length2;
      if (1 === _55._65) {
        let onRejected = _72.onFulfilled;
        let tmp2 = _72;
      } else {
        tmp2 = _72;
        onRejected = _72.onRejected;
      }
      if (null !== onRejected) {
        const tmp11 = (function tryCallOne(onRejected, _55) {
          try {
            return onRejected(_55);
          } catch (tmp3) {
            closure_1 = tmp3;
            return closure_2;
          }
        })(onRejected, tmp._55);
        if (tmp11 === closure_1_2) {
          let promise = tmp2.promise;
          promise._65 = 2;
          promise._55 = _72;
          if (closure_1_3._87) {
            obj._87(promise, tmp15);
          }
          if (1 === promise._40) {
            closure_1_4(promise, promise._72);
            promise._72 = null;
          }
          if (2 === promise._40) {
            let num6 = 0;
            if (0 < promise._72.length) {
              do {
                let tmp19 = closure_1_4;
                let tmp20 = closure_1_4(promise, promise._72[num6]);
                num6 = num6 + 1;
                length2 = promise._72.length;
              } while (num6 < length2);
            }
            promise._72 = null;
          }
          obj = closure_1_3;
        } else {
          closure_1_5(tmp2.promise, tmp11);
        }
      } else if (1 === tmp._65) {
        closure_1_5(tmp2.promise, tmp._55);
      } else {
        promise = tmp2.promise;
        _55 = tmp._55;
        promise._65 = 2;
        promise._55 = _55;
        if (closure_1_3._87) {
          obj2._87(promise, _55);
        }
        if (1 === promise._40) {
          closure_1_4(promise, promise._72);
          promise._72 = null;
        }
        if (2 === promise._40) {
          let num2 = 0;
          if (0 < promise._72.length) {
            do {
              let tmp7 = closure_1_4;
              let tmp8 = closure_1_4(promise, promise._72[num2]);
              num2 = num2 + 1;
              length = promise._72.length;
            } while (num2 < length);
          }
          promise._72 = null;
        }
        obj2 = closure_1_3;
      }
    });
  }
  obj = Promise;
}
function resolve(_40, self) {
  let length;
  let length2;
  let length3;
  let length4;
  if (self === _40) {
    const _TypeError = TypeError;
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
          let tmp34 = handle;
          let tmp35 = handle(_40, _40._72[num18]);
          num18 = num18 + 1;
          length4 = _40._72.length;
        } while (num18 < length4);
      }
      _40._72 = null;
    }
  } else {
    if (self) {
      if (typeof self === "object") {
        const obj = (function getThen(self) {
          try {
            return self.then;
          } catch (tmp2) {
            closure_1 = tmp2;
            return closure_2;
          }
        })(self);
        if (obj === closure_2) {
          _40._65 = 2;
          _40._55 = c1;
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
                let tmp22 = handle;
                let tmp23 = handle(_40, _40._72[num13]);
                num13 = num13 + 1;
                length3 = _40._72.length;
              } while (num13 < length3);
            }
            _40._72 = null;
          }
        } else {
          if (obj === _40.then) {
            if (self instanceof Promise) {
              _40._65 = 3;
              _40._55 = self;
              if (1 === _40._40) {
                handle(_40, _40._72);
                _40._72 = null;
              }
              if (2 === _40._40) {
                let num10 = 0;
                if (0 < _40._72.length) {
                  do {
                    let tmp14 = handle;
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
            doResolve(obj.bind(self), _40);
          }
        }
      }
    }
    _40._65 = 1;
    _40._55 = self;
    if (1 === _40._40) {
      handle(_40, _40._72);
      _40._72 = null;
    }
    if (2 === _40._40) {
      let num6 = 0;
      if (0 < _40._72.length) {
        do {
          let tmp6 = handle;
          let tmp7 = handle(_40, _40._72[num6]);
          num6 = num6 + 1;
          length = _40._72.length;
        } while (num6 < length);
      }
      _40._72 = null;
    }
  }
}
function Handler(fn, fn2, promise) {
  const obj = {};
  let tmp = null;
  if (typeof fn === "function") {
    tmp = fn;
  }
  obj.onFulfilled = tmp;
  let tmp2 = null;
  if (typeof fn2 === "function") {
    tmp2 = fn2;
  }
  obj.onRejected = tmp2;
  obj.promise = promise;
}
function doResolve(arg0, _40) {
  let length;
  closure_0 = _40;
  c1 = false;
  let tmp2 = c1;
  if (!c1) {
    tmp2 = tmp !== closure_2;
  }
  if (!tmp2) {
    c1 = true;
    _40._65 = 2;
    _40._55 = c1;
    if (Promise._87) {
      obj._87(_40, tmp4);
    }
    if (1 === _40._40) {
      handle(_40, _40._72);
      _40._72 = null;
    }
    if (2 === _40._40) {
      let num3 = 0;
      if (0 < _40._72.length) {
        do {
          let tmp9 = handle;
          let tmp10 = handle(_40, _40._72[num3]);
          num3 = num3 + 1;
          length = _40._72.length;
        } while (num3 < length);
      }
      _40._72 = null;
    }
    obj = Promise;
  }
}
let c1 = null;
let closure_2 = {};
Promise._37 = null;
Promise._87 = null;
Promise._61 = noop;

export default Promise;