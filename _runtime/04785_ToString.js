// _runtime/04785_ToString.js
import getEvalledConstructor from "00537_getEvalledConstructor.js";
import _mod538 from "metro/00538__.js";

let closure_2 = getEvalledConstructor("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod538("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return callback(arg0);
  }
}
