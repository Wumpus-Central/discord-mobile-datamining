// _runtime/00723_isStrictComparable.js

export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !require("00606_isObject.js") /* isObject */(arg0);
  }
  return tmp;
};