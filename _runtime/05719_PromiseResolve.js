// _runtime/05719_PromiseResolve.js
import _mod1305 from "metro/01305__.js";
import _mod1327 from "metro/01327__.js";
import callBind from "01474_callBind.js";

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
}
