// _runtime/metro/00096__get.js
import _superPropBase from "../00097__superPropBase.js";

function _get() {
  if (typeof Reflect !== "undefined") {
    const _Reflect2 = Reflect;
    if (Reflect.get) {
      const _Reflect = Reflect;
      exports = get.bind();
    }
    tmp.exports = exports;
    const apply = exports.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(null);
    } else {
      applyArgumentsResult = apply(null, arguments);
    }
    return applyArgumentsResult;
  }
  exports = (arg0, arg1, arg2) => {
    const tmp = _superPropBase(arg0, arg1);
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
