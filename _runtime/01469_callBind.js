// === Module 1469: callBind ===

// Module 1469 (callBind)
import callBindBasic from "callBindBasic" /* 1304 */;
import flag from "flag" /* 1317 */;
import _mod1470 from "module_1470" /* 1470 */;
import applyBind from "applyBind" /* 1473 */;

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
  return _mod1470(tmp, 1 + num, true);
};