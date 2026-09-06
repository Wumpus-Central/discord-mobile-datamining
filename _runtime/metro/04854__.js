// _runtime/metro/04854__.js
import _mod1283 from "01283__.js";
import _mod1284 from "01284__.js";
import callBindBasic from "../01293_callBindBasic.js";

const obj = {};
try {
  obj.__proto__ = null;
  let _module = _mod1284;
  if (_module) {
    const _Object = Object;
    _module = _mod1284(Object.prototype, "__proto__");
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
          const tmp6 = new _mod1283("set Object.prototype.__proto__ called on null or undefined");
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
