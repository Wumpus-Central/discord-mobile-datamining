// === Module 1461: callBind ===

// Module 1461 (callBind)
import callBindBasic from "callBindBasic" /* 1303 */;
import flag from "flag" /* 1316 */;
import _mod1462 from "module_1462" /* 1462 */;
import applyBind from "applyBind" /* 1465 */;

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
  return _mod1462(tmp, 1 + num, true);
};