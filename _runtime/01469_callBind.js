// _runtime/01469_callBind.js
import callBindBasic from "01304_callBindBasic.js";
import flag from "01317_flag.js";
import _mod1470 from "metro/01470__.js";
import applyBind from "01473_applyBind.js";

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
}
