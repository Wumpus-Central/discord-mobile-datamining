// _runtime/00619_hashGet.js
import getNative from "00611_getNative.js";

export default function hashGet(arg0) {
  const __data__ = this.__data__;
  if (getNative) {
    let tmp3;
    if ("__lodash_hash_undefined__" !== __data__[arg0]) {
      tmp3 = tmp2;
    }
    return tmp3;
  } else {
    let tmp;
    if (hasOwnProperty.call(__data__, arg0)) {
      tmp = __data__[arg0];
    }
    return tmp;
  }
}
