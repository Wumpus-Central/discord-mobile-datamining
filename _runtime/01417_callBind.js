// _runtime/01417_callBind.js
import callBindBasic from "00548_callBindBasic.js";
import flag from "00561_flag.js";
import setFunctionLength from "01418_setFunctionLength.js";
import applyBind from "01421_applyBind.js";

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
