// _runtime/01468_callBind.js
import callBindBasic from "01303_callBindBasic.js";
import flag from "01316_flag.js";
import _mod1469 from "metro/01469__.js";
import applyBind from "01472_applyBind.js";

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
  return _mod1469(tmp, 1 + num, true);
}
