// _runtime/00603_isArrayLike.js

export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = require("00604_isLength.js") /* isLength */(arg0.length);
  }
  if (tmp) {
    tmp = !require("00605_isFunction.js") /* isFunction */(arg0);
  }
  return tmp;
};