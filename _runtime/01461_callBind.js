// _runtime/01461_callBind.js
import callBindBasic from "01303_callBindBasic.js";
import flag from "01316_flag.js";
import setFunctionLength from "01462_setFunctionLength.js";
import applyBind from "01465_applyBind.js";

if (flag) {
  const obj = { value: applyBind };
  const _module = flag;
  const _exports = module.exports;
  _module(_exports, "apply", obj);
} else {
  module.exports.apply = applyBind;
}

export default function callBind(arg0) {
  const diff = arg0.length - (arguments.length - 1);
  let num = 0;
  const tmp = callBindBasic(arguments);
  const tmp3 = setFunctionLength;
  if (0 < diff) {
    num = diff;
  }
  return tmp3(tmp, 1 + num, true);
}
