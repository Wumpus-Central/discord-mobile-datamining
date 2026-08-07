// _runtime/metro/04591__.js
import { 00541__ } from "00541__.js";
const obj = {};
try {
  obj.__proto__ = null;
  let _module = require("module_542");
  if (_module) {
    const _Object = Object;
    _module = require("module_542")(Object.prototype, "__proto__");
  }
  let tmp6 = !("toString" in obj);
  if (tmp6) {
    let setDunder = _module;
    if (setDunder) {
      setDunder = typeof _module.set === "function";
    }
    if (setDunder) {
      const items = [_module.set];
      setDunder = require("callBindBasic")(items);
    }
    if (!setDunder) {
      setDunder = function setDunder(arg0, arg1) {
        if (null == arg0) {
          const tmp6 = new 00541__("set Object.prototype.__proto__ called on null or undefined");
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
} catch (tmp2) {
  throw tmp2;
}