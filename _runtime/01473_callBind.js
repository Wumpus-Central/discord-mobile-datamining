// === Module 1473: callBind ===

// Module 1473 (callBind)
import callBindBasic from "callBindBasic" /* 1315 */;
import flag from "flag" /* 1328 */;
import _mod1474 from "module_1474" /* 1474 */;
import applyBind from "applyBind" /* 1477 */;

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
  return _mod1474(tmp, 1 + num, true);
};