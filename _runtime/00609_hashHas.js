// === Module 609: hashHas ===

// Module 609 (hashHas)
import getNative from "getNative" /* 600 */;


export default function hashHas(arg0) {
  const __data__ = this.__data__;
  if (getNative) {
    let tmp2 = undefined !== __data__[arg0];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(arg0) : call(__data__, arg0);
    const tmp = hasOwnProperty;
  }
  return tmp2;
};