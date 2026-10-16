// _runtime/05930_Call.js
import _mod1307 from "metro/01307__.js";
import _mod1308 from "metro/01308__.js";
import callBoundIntrinsic from "01341_callBoundIntrinsic.js";
import _mod5908 from "metro/05908__.js";

let tmp = _mod1307("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5908(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1308("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
}
