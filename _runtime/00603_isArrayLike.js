// _runtime/00603_isArrayLike.js
import { isLength } from "00604_isLength.js";
import { isFunction } from "00605_isFunction.js";

export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = isLength /* isLength */(arg0.length);
  }
  if (tmp) {
    tmp = !isFunction /* isFunction */(arg0);
  }
  return tmp;
};