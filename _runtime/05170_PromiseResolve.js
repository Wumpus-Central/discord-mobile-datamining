// === Module 5170: PromiseResolve ===

// Module 5170 (PromiseResolve)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1303 from "module_1303" /* 1303 */;
import callBind from "callBind" /* 1456 */;

const tmp = _mod1281("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod1303("This environment does not support Promises.");
    throw tmp6;
  }
};