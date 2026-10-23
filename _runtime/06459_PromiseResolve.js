// _runtime/06459_PromiseResolve.js
import _mod1307 from "metro/01307__.js";
import _mod1329 from "metro/01329__.js";
import callBind from "01476_callBind.js";

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
}
