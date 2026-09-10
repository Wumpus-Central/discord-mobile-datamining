// _runtime/04914_Call.js
import _mod1282 from "metro/01282__.js";
import _mod1283 from "metro/01283__.js";
import callBoundIntrinsic from "01316_callBoundIntrinsic.js";
import _mod4892 from "metro/04892__.js";

let tmp = _mod1282("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod4892(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1283("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
}
