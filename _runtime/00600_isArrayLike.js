// === Module 600: isArrayLike ===

// Module 600 (isArrayLike)
import isLength from "isLength" /* 601 */;
import isFunction from "isFunction" /* 602 */;


export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = isLength(arg0.length);
  }
  if (tmp) {
    tmp = !isFunction(arg0);
  }
  return tmp;
};