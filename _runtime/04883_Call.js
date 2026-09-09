// === Module 4883: Call ===

// Module 4883 (Call)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import _mod4861 from "module_4861" /* 4861 */;

let tmp = _mod1282("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod4861(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1283("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};