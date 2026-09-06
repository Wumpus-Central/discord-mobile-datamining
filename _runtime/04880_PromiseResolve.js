// === Module 4880: PromiseResolve ===

// Module 4880 (PromiseResolve)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1304 from "module_1304" /* 1304 */;
import callBind from "callBind" /* 1454 */;

const tmp = _mod1282("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod1304("This environment does not support Promises.");
    throw tmp6;
  }
};