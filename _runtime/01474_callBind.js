// === Module 1474: callBind ===

// Module 1474 (callBind)
import callBindBasic from "callBindBasic" /* 1316 */;
import flag from "flag" /* 1329 */;
import _mod1475 from "module_1475" /* 1475 */;
import applyBind from "applyBind" /* 1478 */;

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
  return _mod1475(tmp, 1 + num, true);
};