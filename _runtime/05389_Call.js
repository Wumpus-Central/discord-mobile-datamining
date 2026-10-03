// === Module 5389: Call ===

// Module 5389 (Call)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import _mod5367 from "module_5367" /* 5367 */;

let tmp = _mod1292("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5367(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1293("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};