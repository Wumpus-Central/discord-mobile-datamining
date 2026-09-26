// === Module 1456: callBind ===

// Module 1456 (callBind)
import callBindBasic from "callBindBasic" /* 1292 */;
import flag from "flag" /* 1305 */;
import _mod1457 from "module_1457" /* 1457 */;
import applyBind from "applyBind" /* 1460 */;

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
  return _mod1457(tmp, 1 + num, true);
};