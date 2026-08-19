// _runtime/00744_hashGet.js
import getNative from "00736_getNative.js";


export default function hashGet(key10009) {
  const __data__ = this.__data__;
  if (getNative) {
    let tmp4;
    if ("__lodash_hash_undefined__" !== __data__[key10009]) {
      tmp4 = tmp3;
    }
    return tmp4;
  } else {
    const call = hasOwnProperty.call;
    let tmp2;
    if (typeof call === "unknown" ? hasOwnProperty(key10009) : call(__data__, key10009)) {
      tmp2 = __data__[key10009];
    }
    return tmp2;
  }
};