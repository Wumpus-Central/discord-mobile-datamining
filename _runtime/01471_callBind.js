// === Module 1471: callBind ===

// Module 1471 (callBind)
import callBindBasic from "callBindBasic" /* 1305 */;
import flag from "flag" /* 1318 */;
import _mod1472 from "module_1472" /* 1472 */;
import applyBind from "applyBind" /* 1475 */;

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
  return _mod1472(tmp, 1 + num, true);
};