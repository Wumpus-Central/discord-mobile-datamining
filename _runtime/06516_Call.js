// _runtime/06516_Call.js
import _mod1293 from "metro/01293__.js";
import _mod1294 from "metro/01294__.js";
import callBoundIntrinsic from "01327_callBoundIntrinsic.js";
import _mod6494 from "metro/06494__.js";

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
}
