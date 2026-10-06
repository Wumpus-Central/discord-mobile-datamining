// === Module 6380: _get ===

// Module 6380 (_get)
import _superPropBase from "_superPropBase" /* 6381 */;

function _get() {
  if (typeof Reflect !== "undefined") {
    const _Reflect2 = Reflect;
    if (Reflect.get) {
      const _Reflect = Reflect;
      exports = get.bind();
    }
    module.exports = exports;
    let tmp3 = null;
    return exports(...arguments);
  }
  exports = function(arg0, arg1, arg2) {
    const tmp = _superPropBase(arg0, arg1);
    if (tmp) {
      let callResult;
      const _Object = Object;
      const iter = Object.getOwnPropertyDescriptor(tmp, arg1);
      if (iter.get) {
        let tmp3 = arg2;
        const get = iter.get;
        const call = get.call;
        if (arguments.length < 3) {
          tmp3 = arg0;
        }
        callResult = call(tmp3);
      } else {
        callResult = iter.value;
      }
      return callResult;
    }
  };
}
exports = _get;

export default _get;