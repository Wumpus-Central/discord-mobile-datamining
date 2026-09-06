// === Module 651: valueOf ===

// Module 651 (valueOf)
import _mod523 from "module_523" /* 523 */;

let prototype;
if (_mod523) {
  prototype = _mod523.prototype;
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
};