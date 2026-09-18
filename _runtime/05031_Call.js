// === Module 5031: Call ===

// Module 5031 (Call)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import _mod5009 from "module_5009" /* 5009 */;

let tmp = _mod1281("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5009(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1282("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};