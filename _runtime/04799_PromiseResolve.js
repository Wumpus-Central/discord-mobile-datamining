// === Module 4799: PromiseResolve ===

// Module 4799 (PromiseResolve)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import _mod562 from "module_562" /* 562 */;
import callBind from "callBind" /* 1422 */;

const tmp = getEvalledConstructor("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = callBind(tmp);
}
let closure_2 = tmp2;

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new _mod562("This environment does not support Promises.");
    throw tmp6;
  }
};