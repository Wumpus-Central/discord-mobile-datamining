// === Module 744: hashGet ===

// Module 744 (hashGet)
import getNative from "getNative" /* 736 */;


export default function hashGet(arg0) {
  const __data__ = this.__data__;
  if (getNative) {
    let tmp4;
    if ("__lodash_hash_undefined__" !== __data__[arg0]) {
      tmp4 = tmp3;
    }
    return tmp4;
  } else {
    const call = hasOwnProperty.call;
    let tmp2;
    if (typeof call === "unknown" ? hasOwnProperty(arg0) : call(__data__, arg0)) {
      tmp2 = __data__[arg0];
    }
    return tmp2;
  }
};