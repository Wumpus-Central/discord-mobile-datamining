// _runtime/00608_hashHas.js
import _mod599 from "metro/00599__.js";

export default function hashHas(View) {
  const __data__ = this.__data__;
  if (_mod599) {
    let tmp2 = undefined !== __data__[View];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(View) : call(__data__, View);
  }
  return tmp2;
}
