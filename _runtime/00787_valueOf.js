// _runtime/00787_valueOf.js
let prototype;
if (require("module_608")) {
  prototype = require("module_608").prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function equalByTag(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  let call;
  let call2;
  if (!valueOf) {
    return false;
  } else {
    ({ call, call: call2 } = tmp3);
    return (typeof call === "unknown" ? tmp3() : call(tmp)) == (typeof call2 === "unknown" ? tmp3() : call2(tmp2));
  }
};