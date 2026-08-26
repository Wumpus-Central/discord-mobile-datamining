// _runtime/13854___core-js_shared__.js
import __core_js_shared__ from "13855___core-js_shared__.js";


export default (arg0, arg1) => {
  let tmp3 = __core_js_shared__[arg0];
  if (!tmp3) {
    let obj = arg1;
    if (!arg1) {
      obj = {};
    }
    __core_js_shared__[arg0] = obj;
    tmp3 = obj;
    const tmpResult = __core_js_shared__;
  }
  return tmp3;
};