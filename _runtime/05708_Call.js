// === Module 5708: Call ===

// Module 5708 (Call)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import _mod5686 from "module_5686" /* 5686 */;

let tmp = _mod1305("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5686(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1306("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};