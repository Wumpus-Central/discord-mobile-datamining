// _runtime/05042_PromiseResolve.js
import _mod1281 from "metro/01281__.js";
import _mod1303 from "metro/01303__.js";
import callBind from "01455_callBind.js";

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
}
