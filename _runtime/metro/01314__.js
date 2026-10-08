// === Module 1314: ? ===

// Module 1314
import _mod1306 from "module_1306" /* 1306 */;
import callBindBasic from "callBindBasic" /* 1315 */;

try {
  const _Array = Array;
  let _module = [].__proto__ === Array.prototype;
  if (_module) {
    _module = _mod1306;
  }
  if (_module) {
    const _Object = Object;
    _module = _mod1306(Object.prototype, "__proto__");
  }
  const _Object2 = Object;
  if (_module) {
    if (typeof _module.get === "function") {
      const items = [_module.get];
      let getDunder = callBindBasic(items);
    }
    module.exports = getDunder;
  }
  getDunder = typeof getPrototypeOf === "function";
  if (typeof getPrototypeOf === "function") {
    getDunder = function getDunder(arg0) {
      let tmp2 = arg0;
      if (null != arg0) {
        tmp2 = Object(arg0);
      }
      return getPrototypeOf(tmp2);
    };
  }
} catch (tmp2) {
  throw tmp2;
}