// === Module 1476: callBind ===

// Module 1476 (callBind)
import callBindBasic from "callBindBasic" /* 1318 */;
import flag from "flag" /* 1331 */;
import _mod1477 from "module_1477" /* 1477 */;
import applyBind from "applyBind" /* 1480 */;

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
  return _mod1477(tmp, 1 + num, true);
};