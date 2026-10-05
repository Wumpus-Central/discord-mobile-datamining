// === Module 158: _wrapNativeSuper ===

// Module 158 (_wrapNativeSuper)
import _setPrototypeOf from "_setPrototypeOf" /* 99 */;
import _isNativeFunction from "_isNativeFunction" /* 159 */;

let map;

function _wrapNativeSuper(fn) {
  map = undefined;
  if (typeof Map === "function") {
    const _Map = Map;
    let self = this;
    let self2 = this;
    map = new Map();
  }
  _wrapNativeSuper = function _wrapNativeSuper(fn) {
    let obj2;
    let closure_0 = fn;
    if (null !== fn) {
      if (_isNativeFunction(fn)) {
        if (typeof fn !== "function") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("Super expression must either be null or a function");
          throw typeError;
        } else {
          class Wrapper {
            constructor() {
              tmp = closure_2_0(closure_2_2[1]);
              return tmp(closure_0, arguments, closure_2_0(closure_2_2[2])(this).constructor);
            }
          }
          if (undefined !== map) {
            class Wrapper {
              constructor() {
                tmp = closure_2_0(closure_2_2[1]);
                return tmp(closure_0, arguments, closure_2_0(closure_2_2[2])(this).constructor);
              }
            }
          }
          let tmp = globalThis;
          const _Object = Object;
          const obj = { constructor: obj2 };
          obj2 = { value: Wrapper, enumerable: false, writable: true, configurable: true };
          Wrapper.prototype = Object.create(fn.prototype, obj);
          return _setPrototypeOf(Wrapper, fn);
        }
      }
    }
    return fn;
  };
  module.exports = _wrapNativeSuper;
  return _wrapNativeSuper(fn);
}

export default _wrapNativeSuper;