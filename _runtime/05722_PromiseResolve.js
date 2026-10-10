// === Module 5722: PromiseResolve ===

// Module 5722 (PromiseResolve)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1327 from "module_1327" /* 1327 */;
import callBind from "callBind" /* 1474 */;

const tmp = _mod1305("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod1327("This environment does not support Promises.");
    throw tmp6;
  }
};