// === Module 5400: PromiseResolve ===

// Module 5400 (PromiseResolve)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1314 from "module_1314" /* 1314 */;
import callBind from "callBind" /* 1461 */;

const tmp = _mod1292("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod1314("This environment does not support Promises.");
    throw tmp6;
  }
};