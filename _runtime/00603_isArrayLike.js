// _runtime/00603_isArrayLike.js
import isLength from "isLength" /* 604 */;
import isFunction from "isFunction" /* 605 */;


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