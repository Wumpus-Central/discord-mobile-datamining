// _runtime/00620_hashHas.js
import _mod611 from "metro/00611__.js";

export default function hashHas(View) {
  const __data__ = this.__data__;
  if (_mod611) {
    let tmp2 = undefined !== __data__[View];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(View) : call(__data__, View);
  }
  return tmp2;
}
