// _runtime/00603_isArrayLike.js

export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = require(604) /* isLength */(arg0.length);
  }
  if (tmp) {
    tmp = !require(605) /* isFunction */(arg0);
  }
  return tmp;
};