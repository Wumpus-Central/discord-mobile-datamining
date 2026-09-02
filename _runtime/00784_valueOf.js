// === Module 784: valueOf ===

// Module 784 (valueOf)
import _mod605 from "module_605" /* 605 */;

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
};