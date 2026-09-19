// _runtime/05064_Call.js
import _mod1281 from "metro/01281__.js";
import _mod1282 from "metro/01282__.js";
import callBoundIntrinsic from "01315_callBoundIntrinsic.js";
import _mod5042 from "metro/05042__.js";

let tmp = _mod1281("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5042(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1282("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
}
