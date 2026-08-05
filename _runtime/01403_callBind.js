import { callBindBasic } from "00551_callBindBasic.js";
import { setFunctionLength } from "01404_setFunctionLength.js";
// _runtime/01403_callBind.js
if (require("flag")) {
  const obj = { value: null };
  const _module = require("flag");
  obj[0] = require("applyBind");
  _module(module.exports, "apply", obj);
} else {
  module.exports.apply = require("applyBind");
}

export default function callBind(arg0) {
  const diff = arg0.length - (arguments.length - 1);
  let num = 0;
  const tmp = callBindBasic /* callBindBasic */(arguments);
  if (0 < diff) {
    num = diff;
  }
  return setFunctionLength /* setFunctionLength */(tmp, 1 + num, true);
};