// _runtime/00784_valueOf.js
import _mod605 from "metro/00605__.js";

let prototype;
if (_mod605) {
  prototype = _mod605.prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function equalByTag(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  if (!valueOf) {
    return false;
  } else {
    ({ call, call: call2 } = tmp3);
    return (typeof call === "unknown" ? tmp3() : call(tmp)) == (typeof call2 === "unknown" ? tmp3() : call2(tmp2));
  }
}
