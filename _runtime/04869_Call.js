// === Module 4869: Call ===

// Module 4869 (Call)
import getEvalledConstructor from "getEvalledConstructor" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import getEvalledConstructor2 from "getEvalledConstructor" /* 4847 */;

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
    const tmp6 = new _mod1283("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
  const tmp2 = require;
};