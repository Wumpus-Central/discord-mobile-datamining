// === Module 7072: _get ===

// Module 7072 (_get)
function _get() {
  if (typeof Reflect !== "undefined") {
    const _Reflect2 = Reflect;
    if (Reflect.get) {
      const _Reflect = Reflect;
      let fn = get.bind();
    }
    module.exports = fn;
    const apply = fn.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(null);
    } else {
      applyArgumentsResult = apply(null, arguments);
    }
    return applyArgumentsResult;
  }
  fn = (arg0, arg1, arg2) => {
    const tmp = callback(table[0])(arg0, arg1);
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

export default _get;