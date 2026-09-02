// _runtime/00600_isArrayLike.js
import isLength from "00601_isLength.js";
import isFunction from "00602_isFunction.js";

export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = isLength(arg0.length);
  }
  if (tmp) {
    tmp = !isFunction(arg0);
  }
  return tmp;
}
