// _runtime/04786_PromiseResolve.js
import getEvalledConstructor from "00540_getEvalledConstructor.js";
import _mod562 from "metro/00562__.js";
import callBind from "01422_callBind.js";

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