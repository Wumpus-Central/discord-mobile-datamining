// === Module 739: baseIsNative ===

// Module 739 (baseIsNative)
import isFunction from "isFunction" /* 605 */;
import isObject from "isObject" /* 606 */;
import isMasked from "isMasked" /* 740 */;
import toSource from "toSource" /* 742 */;

const re2 = /^\[object .+?Constructor\]$/;
const call = toString.call;
const str = typeof call === "unknown" ? toString() : call(hasOwnProperty);
let closure_3 = RegExp(`^${typeof call === "unknown" ? toString() : call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);

export default function baseIsNative(arg0) {
  let tmp2 = dependencyMap;
  const tmp3 = isObject(arg0);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = isMasked(arg0);
  }
  if (tmp4) {
    return !tmp4;
  } else {
    tmp2 = toSource(arg0);
    const isMatch = isFunction(arg0) ? closure_3 : closure_2.test(tmp2);
    const obj = isFunction(arg0) ? closure_3 : closure_2;
  }
};