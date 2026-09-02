// _runtime/00720_isStrictComparable.js
import isObject from "00603_isObject.js";

export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !isObject(arg0);
  }
  return tmp;
}
