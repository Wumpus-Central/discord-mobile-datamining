// _runtime/01454_callBind.js
import callBindBasic from "01293_callBindBasic.js";
import flag from "01306_flag.js";
import _mod1455 from "metro/01455__.js";
import applyBind from "01458_applyBind.js";

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
  return _mod1455(tmp, 1 + num, true);
}
