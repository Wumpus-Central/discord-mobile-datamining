// === Module 608: hashGet ===

// Module 608 (hashGet)
import _mod600 from "module_600" /* 600 */;


export default function hashGet(View) {
  const __data__ = this.__data__;
  if (_mod600) {
    let tmp4;
    if ("__lodash_hash_undefined__" !== __data__[View]) {
      tmp4 = tmp3;
    }
    return tmp4;
  } else {
    const call = hasOwnProperty.call;
    let tmp2;
    if (typeof call === "unknown" ? hasOwnProperty(View) : call(__data__, View)) {
      tmp2 = __data__[View];
    }
    return tmp2;
  }
};