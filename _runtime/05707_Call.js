// _runtime/05707_Call.js
import _mod1304 from "metro/01304__.js";
import _mod1305 from "metro/01305__.js";
import callBoundIntrinsic from "01338_callBoundIntrinsic.js";
import _mod5685 from "metro/05685__.js";

let tmp = _mod1304("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5685(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1305("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
}
