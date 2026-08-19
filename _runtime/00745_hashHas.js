// === Module 745: hashHas ===

// Module 745 (hashHas)
import getNative from "getNative" /* 736 */;


export default function hashHas(key10009) {
  const __data__ = this.__data__;
  if (getNative) {
    let tmp2 = undefined !== __data__[key10009];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(key10009) : call(__data__, key10009);
  }
  return tmp2;
};