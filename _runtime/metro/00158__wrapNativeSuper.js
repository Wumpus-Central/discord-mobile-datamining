// _runtime/metro/00158__wrapNativeSuper.js
function _wrapNativeSuper(fn) {
  let map;
  if (typeof Map === "function") {
    const _Map = Map;
    map = new Map();
  }
  _wrapNativeSuper = function _wrapNativeSuper(fn) {
    closure_0 = fn;
    if (null !== fn) {
      if (map(closure_1_2[0])(fn)) {
        if (typeof fn !== "function") {
          const _TypeError = TypeError;
          const typeError = new TypeError("Super expression must either be null or a function");
          throw typeError;
        } else {
          class Wrapper {
            constructor() {
              tmp = closure_0(closure_1_2[1]);
              return tmp(closure_0, arguments, closure_0(closure_1_2[2])(this).constructor);
            }
          }
          if (undefined !== closure_0) {
            class Wrapper {
              constructor() {
                tmp = closure_0(closure_1_2[1]);
                return tmp(closure_0, arguments, closure_0(closure_1_2[2])(this).constructor);
              }
            }
          }
          const _Object = Object;
          let obj = { constructor: null };
          obj = { value: null, enumerable: false, writable: true, configurable: true };
          obj[0] = Wrapper;
          obj[0] = obj;
          Wrapper.prototype = Object.create(fn.prototype, obj);
          return tmp7(tmp8[3])(Wrapper, fn);
        }
      }
      tmp7 = map;
      tmp8 = closure_1_2;
    }
    return fn;
  };
  module.exports = _wrapNativeSuper;
  return _wrapNativeSuper(fn);
}

export default _wrapNativeSuper;