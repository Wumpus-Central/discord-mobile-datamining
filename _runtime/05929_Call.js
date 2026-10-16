// === Module 5929: Call ===

// Module 5929 (Call)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import _mod5907 from "module_5907" /* 5907 */;

let tmp = _mod1307("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5907(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1308("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};