// _runtime/00739_baseIsNative.js
import isFunction from "00605_isFunction.js";
import isObject from "00606_isObject.js";
import isMasked from "00740_isMasked.js";
import toSource from "00742_toSource.js";

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