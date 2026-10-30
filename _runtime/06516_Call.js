// === Module 6516: Call ===

// Module 6516 (Call)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import _mod6494 from "module_6494" /* 6494 */;

let tmp = _mod1293("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod6494(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1294("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};