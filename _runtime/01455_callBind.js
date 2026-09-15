// === Module 1455: callBind ===

// Module 1455 (callBind)
import callBindBasic from "callBindBasic" /* 1292 */;
import flag from "flag" /* 1305 */;
import _mod1456 from "module_1456" /* 1456 */;
import applyBind from "applyBind" /* 1459 */;

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
  return _mod1456(tmp, 1 + num, true);
};