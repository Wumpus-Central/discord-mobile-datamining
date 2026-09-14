// _runtime/04956_PromiseResolve.js
import _mod1280 from "metro/01280__.js";
import _mod1302 from "metro/01302__.js";
import callBind from "01454_callBind.js";

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
}
