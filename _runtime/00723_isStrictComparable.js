import { isObject } from "00606_isObject.js";
// _runtime/00723_isStrictComparable.js

export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !isObject /* isObject */(arg0);
  }
  return tmp;
};