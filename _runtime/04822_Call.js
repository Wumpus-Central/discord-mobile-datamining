// _runtime/04822_Call.js
import getEvalledConstructor from "00537_getEvalledConstructor.js";
import _mod538 from "metro/00538__.js";
import callBoundIntrinsic from "00571_callBoundIntrinsic.js";
import getEvalledConstructor2 from "04800_getEvalledConstructor.js";

let tmp = getEvalledConstructor("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (getEvalledConstructor2(tmp)) {
    return callback(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod538("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
  const tmp2 = require;
}
