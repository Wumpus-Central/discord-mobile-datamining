// === Module 6509: Call ===

// Module 6509 (Call)
import _mod1304 from "module_1304" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import _mod6487 from "module_6487" /* 6487 */;

let tmp = _mod1304("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod6487(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1305("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};