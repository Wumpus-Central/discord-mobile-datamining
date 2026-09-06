// === Module 518: isArrayLike ===

// Module 518 (isArrayLike)
import isLength from "isLength" /* 519 */;
import isFunction from "isFunction" /* 520 */;


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