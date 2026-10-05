// _runtime/00518_isArrayLike.js
import isLength from "00519_isLength.js";
import isFunction from "00520_isFunction.js";

export default function isArrayLike(arg0) {
  const tmp = null != arg0 && isLength(arg0.length) && !isFunction(arg0);
  return tmp;
}
