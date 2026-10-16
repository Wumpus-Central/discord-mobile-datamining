// === Module 6790: ? ===

// Module 6790
import _mod6791 from "module_6791" /* 6791 */;

function _get() {
  if (typeof Reflect !== "undefined") {
    const _Reflect2 = Reflect;
    if (Reflect.get) {
      const _Reflect = Reflect;
      exports = get.bind();
    }
    module.exports = exports;
    const apply = exports.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(null);
    } else {
      applyArgumentsResult = apply(null, arguments);
    }
    return applyArgumentsResult;
  }
  exports = (arg0, arg1, arg2) => {
    const tmp = _mod6791(arg0, arg1);
    if (tmp) {
      const _Object = Object;
      const iter = Object.getOwnPropertyDescriptor(tmp, arg1);
      if (iter.get) {
        let tmp3 = arg2;
        const get = iter.get;
        const call = get.call;
        if (arguments.length < 3) {
          tmp3 = arg0;
        }
        typeof call === "unknown" ? get() : call(tmp3);
      } else {
        return iter.value;
      }
    }
  };
}
let exports = _get;

export default _get;