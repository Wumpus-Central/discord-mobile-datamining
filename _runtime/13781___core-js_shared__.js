// === Module 13781: __core-js_shared__ ===

// Module 13781 (__core-js_shared__)
import __core_js_shared__ from "__core-js_shared__" /* 13782 */;


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