// _runtime/04880_PromiseResolve.js
import _mod1282 from "metro/01282__.js";
import _mod1304 from "metro/01304__.js";
import callBind from "01454_callBind.js";

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
}
