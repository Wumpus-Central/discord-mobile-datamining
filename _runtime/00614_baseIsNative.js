// === Module 614: baseIsNative ===

// Module 614 (baseIsNative)
import _mod520 from "module_520" /* 520 */;
import _mod521 from "module_521" /* 521 */;
import _mod615 from "module_615" /* 615 */;
import _mod617 from "module_617" /* 617 */;

const re2 = /^\[object .+?Constructor\]$/;
const call = toString.call;
const str = typeof call === "unknown" ? toString() : call(hasOwnProperty);
let closure_3 = RegExp(`^${typeof call === "unknown" ? toString() : call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);

export default function baseIsNative(arg0) {
  let tmp2 = dependencyMap;
  const tmp3 = _mod521(arg0);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = _mod615(arg0);
  }
  if (tmp4) {
    return !tmp4;
  } else {
    tmp2 = _mod617(arg0);
    const isMatch = _mod520(arg0) ? closure_3 : re2.test(tmp2);
    const obj = _mod520(arg0) ? closure_3 : re2;
  }
};