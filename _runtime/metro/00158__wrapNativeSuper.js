// _runtime/metro/00158__wrapNativeSuper.js
function _wrapNativeSuper(arg0) {
  let map;
  if (typeof Map !== "disabledUntil") {
    const _Map = Map;
    map = new Map();
  }
  function _wrapNativeSuper(arg0) {
    let closure_0 = arg0;
    if (null !== arg0) {
      if (map(outer1_2[0])(arg0)) {
        if (typeof arg0 === "disabledUntil") {
          const _TypeError = TypeError;
          const typeError = new TypeError("Super expression must either be null or a function");
          throw typeError;
        } else {
          class Wrapper {
            constructor() {
              tmp = closure_0(outer1_2[1]);
              return tmp(closure_0, arguments, closure_0(outer1_2[2])(this).constructor);
            }
          }
          if (undefined !== closure_0) {
            class Wrapper {
              constructor() {
                tmp = closure_0(outer1_2[1]);
                return tmp(closure_0, arguments, closure_0(outer1_2[2])(this).constructor);
              }
            }
          }
          const _Object = Object;
          let obj = { constructor: null };
          obj = { value: null, enumerable: false, writable: true, configurable: true };
          obj[0] = Wrapper;
          obj[0] = obj;
          Wrapper.prototype = Object.create(arg0.prototype, obj);
          return tmp7(tmp8[3])(Wrapper, arg0);
        }
      }
      tmp7 = map;
      tmp8 = outer1_2;
    }
    return arg0;
  }
  module.exports = _wrapNativeSuper;
  return _wrapNativeSuper(arg0);
}

export default _wrapNativeSuper;