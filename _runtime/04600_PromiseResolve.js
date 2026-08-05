// _runtime/04600_PromiseResolve.js
const tmp = require("getEvalledConstructor")("%Promise.resolve%", true);
let tmp2 = tmp;
if (tmp) {
  tmp2 = require("callBind")(tmp);
}

export default function PromiseResolve(arg0, arg1) {
  if (closure_2) {
    return tmp(arg0, arg1);
  } else {
    const tmp6 = new require(562)("This environment does not support Promises.");
    throw tmp6;
  }
};