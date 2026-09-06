// === Module 1454: callBind ===

// Module 1454 (callBind)
import callBindBasic from "callBindBasic" /* 1293 */;
import flag from "flag" /* 1306 */;
import _mod1455 from "module_1455" /* 1455 */;
import applyBind from "applyBind" /* 1458 */;

if (flag) {
  const obj = { value: null };
  const _module = flag;
  obj.value = applyBind;
  _module(module.exports, "apply", obj);
} else {
  module.exports.apply = applyBind;
}

export default function callBind(arg0) {
  const diff = arg0.length - (arguments.length - 1);
  let num = 0;
  const tmp = callBindBasic(arguments);
  if (0 < diff) {
    num = diff;
  }
  return _mod1455(tmp, 1 + num, true);
};