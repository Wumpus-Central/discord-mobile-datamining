// === Module 603: baseIsNative ===

// Module 603 (baseIsNative)
import _mod521 from "module_521" /* 521 */;

const re2 = /^\[object .+?Constructor\]$/;
const call = toString.call;
const str = typeof call === "unknown" ? toString() : call(hasOwnProperty);
let closure_3 = RegExp(`^${typeof call === "unknown" ? toString() : call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);

export default function baseIsNative(arg0) {
  let tmp2 = dependencyMap;
  const tmp3 = _mod521(arg0);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = tmp(604)(arg0);
  }
  if (tmp4) {
    return !tmp4;
  } else {
    tmp2 = tmp(606)(arg0);
    const isMatch = tmp(520)(arg0) ? closure_3 : re2.test(tmp2);
    const obj = tmp(520)(arg0) ? closure_3 : re2;
  }
};