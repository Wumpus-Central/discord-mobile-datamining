// === Module 620: hashHas ===

// Module 620 (hashHas)
import _mod611 from "module_611" /* 611 */;


export default function hashHas(View) {
  const __data__ = this.__data__;
  if (_mod611) {
    let tmp2 = undefined !== __data__[View];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(View) : call(__data__, View);
  }
  return tmp2;
};