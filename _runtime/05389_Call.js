// _runtime/05389_Call.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import _mod1293 from "metro/01293__.js";
import callBoundIntrinsic from "01326_callBoundIntrinsic.js";
import GetIntrinsic2 from "05367_GetIntrinsic.js";

let tmp = GetIntrinsic("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (GetIntrinsic2(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const self = this;
    const self2 = this;
    const tmp4 = new _mod1293("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp4;
  }
}
