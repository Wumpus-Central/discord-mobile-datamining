// _runtime/04834_PromiseResolve.js
import getEvalledConstructor from "00537_getEvalledConstructor.js";
import _mod559 from "metro/00559__.js";
import callBind from "01417_callBind.js";

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
    const tmp6 = new _mod559("This environment does not support Promises.");
    throw tmp6;
  }
}
