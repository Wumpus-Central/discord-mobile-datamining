// === Module 6447: PromiseResolve ===

// Module 6447 (PromiseResolve)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1329 from "module_1329" /* 1329 */;
import callBind from "callBind" /* 1476 */;

const tmp = _mod1307("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod1329("This environment does not support Promises.");
    throw tmp6;
  }
};