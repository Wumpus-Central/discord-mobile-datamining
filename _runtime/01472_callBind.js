// === Module 1472: callBind ===

// Module 1472 (callBind)
import callBindBasic from "callBindBasic" /* 1306 */;
import flag from "flag" /* 1319 */;
import _mod1473 from "module_1473" /* 1473 */;
import applyBind from "applyBind" /* 1476 */;

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
  return _mod1473(tmp, 1 + num, true);
};