// _runtime/00620_hashHas.js
import getNative from "00611_getNative.js";

export default function hashHas(arg0) {
  let callResult;
  const __data__ = this.__data__;
  if (getNative) {
    callResult = undefined !== __data__[arg0];
  } else {
    callResult = hasOwnProperty.call(__data__, arg0);
  }
  return callResult;
}
