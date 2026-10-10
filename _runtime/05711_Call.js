// _runtime/05711_Call.js
import _mod1305 from "metro/01305__.js";
import _mod1306 from "metro/01306__.js";
import callBoundIntrinsic from "01339_callBoundIntrinsic.js";
import _mod5689 from "metro/05689__.js";

let tmp = _mod1305("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5689(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1306("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
}
