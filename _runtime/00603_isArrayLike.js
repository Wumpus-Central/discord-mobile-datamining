import { isLength } from "00604_isLength.js";
import { isFunction } from "00605_isFunction.js";
// _runtime/00603_isArrayLike.js

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