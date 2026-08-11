// _runtime/13595___core-js_shared__.js
import { __core-js_shared__ } from "13596___core-js_shared__.js";

export default (arg0, arg1) => {
  let tmp3 = __core-js_shared__[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    __core-js_shared__[arg0] = obj;
    tmp3 = obj;
    const tmpResult = __core-js_shared__;
  }
  return tmp3;
};