// _runtime/00614_baseIsNative.js
import isFunction from "00520_isFunction.js";
import isObject from "00521_isObject.js";
import isMasked from "00615_isMasked.js";
import toSource from "00617_toSource.js";

const re2 = /^\[object .+?Constructor\]$/;
const _RegExp = RegExp;
const str = toString.call(Object.prototype.hasOwnProperty);
const str2 = str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
let closure_3 = _RegExp(`^${str2.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}$`);

export default function baseIsNative(arg0) {
  const tmp3 = isObject(arg0);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = isMasked(arg0);
  }
  let isMatch = !tmp4;
  if (isMatch) {
    const obj = isFunction(arg0) ? closure_3 : re2;
    isMatch = obj.test(toSource(arg0));
  }
  return isMatch;
}
