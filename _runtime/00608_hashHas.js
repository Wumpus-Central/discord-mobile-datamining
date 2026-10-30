// === Module 608: hashHas ===

// Module 608 (hashHas)
import _mod599 from "module_599" /* 599 */;


export default function hashHas(View) {
  const __data__ = this.__data__;
  if (_mod599) {
    let tmp2 = undefined !== __data__[View];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(View) : call(__data__, View);
  }
  return tmp2;
};