// === Module 619: hashGet ===

// Module 619 (hashGet)
import _mod611 from "module_611" /* 611 */;


export default function hashGet(View) {
  const __data__ = this.__data__;
  if (_mod611) {
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