// === Module 4956: PromiseResolve ===

// Module 4956 (PromiseResolve)
import _mod1280 from "module_1280" /* 1280 */;
import _mod1302 from "module_1302" /* 1302 */;
import callBind from "callBind" /* 1454 */;

const tmp = _mod1280("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod1302("This environment does not support Promises.");
    throw tmp6;
  }
};