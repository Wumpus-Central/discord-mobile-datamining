// _runtime/01454_callBind.js
import callBindBasic from "01293_callBindBasic.js";
import flag from "01306_flag.js";
import setFunctionLength from "01455_setFunctionLength.js";
import applyBind from "01458_applyBind.js";

if (flag) {
  const obj = { value: null };
  const _module = flag;
  obj[0] = applyBind;
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
  return setFunctionLength(tmp, 1 + num, true);
}
