// _runtime/metro/06501__.js
import _mod1294 from "01294__.js";
import _mod1295 from "01295__.js";
import callBindBasic from "../01304_callBindBasic.js";

const obj = {};
try {
  obj.__proto__ = null;
  let _module = _mod1295;
  if (_module) {
    const _Object = Object;
    _module = _mod1295(Object.prototype, "__proto__");
  }
  let tmp6 = !("toString" in obj);
  if (tmp6) {
    let setDunder = _module;
    if (setDunder) {
      setDunder = typeof _module.set === "function";
    }
    if (setDunder) {
      const items = [_module.set];
      setDunder = callBindBasic(items);
    }
    if (!setDunder) {
      setDunder = function setDunder(arg0, arg1) {
        if (null == arg0) {
          const tmp6 = new _mod1294("set Object.prototype.__proto__ called on null or undefined");
          throw tmp6;
        } else {
          arg0.__proto__ = arg1;
          return arg1;
        }
      };
    }
    tmp6 = setDunder;
  }
  module.exports = tmp6;
  const tmp3 = "toString" in obj;
} catch (tmp2) {
  throw tmp2;
}
