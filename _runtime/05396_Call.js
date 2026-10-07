// _runtime/05396_Call.js
import _mod1292 from "metro/01292__.js";
import _mod1293 from "metro/01293__.js";
import callBoundIntrinsic from "01326_callBoundIntrinsic.js";
import _mod5374 from "metro/05374__.js";

let tmp = _mod1292("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod5374(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1293("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
}
