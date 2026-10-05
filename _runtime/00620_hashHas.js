// === Module 620: hashHas ===

// Module 620 (hashHas)
import getNative from "getNative" /* 611 */;


export default function hashHas(arg0) {
  let callResult;
  const __data__ = this.__data__;
  if (getNative) {
    callResult = undefined !== __data__[arg0];
  } else {
    callResult = hasOwnProperty.call(__data__, arg0);
  }
  return callResult;
};