// _runtime/01422_callBind.js
import callBindBasic from "callBindBasic" /* 551 */;
import flag from "flag" /* 564 */;
import setFunctionLength from "setFunctionLength" /* 1423 */;
import applyBind from "applyBind" /* 1426 */;

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
};