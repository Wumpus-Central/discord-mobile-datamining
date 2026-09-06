// === Module 158: _wrapNativeSuper ===

// Module 158 (_wrapNativeSuper)
import _isNativeFunction from "_isNativeFunction" /* 159 */;

function _wrapNativeSuper(fn) {
  let map;
  if (typeof Map === "function") {
    const _Map = Map;
    map = new Map();
  }
  _wrapNativeSuper = function _wrapNativeSuper(fn) {
    if (null !== fn) {
      if (_isNativeFunction(fn)) {
        if (typeof fn !== "function") {
          const _TypeError = TypeError;
          const typeError = new TypeError("Super expression must either be null or a function");
          throw typeError;
        } else {
          class Wrapper {
            constructor() {
              tmp = closure_0(closure_2_2[1]);
              return tmp(closure_0, arguments, closure_0(closure_2_2[2])(this).constructor);
            }
          }
          if (undefined !== map) {
            class Wrapper {
              constructor() {
                tmp = closure_0(closure_2_2[1]);
                return tmp(closure_0, arguments, closure_0(closure_2_2[2])(this).constructor);
              }
            }
          }
          const _Object = Object;
          let obj = { constructor: null };
          obj = { value: Wrapper, enumerable: false, writable: true, configurable: true };
          obj.constructor = obj;
          Wrapper.prototype = Object.create(fn.prototype, obj);
          return tmp7(99)(Wrapper, fn);
        }
      }
      tmp7 = require;
    }
    return fn;
  };
  module.exports = _wrapNativeSuper;
  return _wrapNativeSuper(fn);
}

export default _wrapNativeSuper;