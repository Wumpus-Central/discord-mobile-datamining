// _runtime/00598_isStrictComparable.js
import isObject from "00521_isObject.js";

export default function isStrictComparable(arg0) {
  const tmp = arg0 == arg0 && !isObject(arg0);
  return tmp;
}
