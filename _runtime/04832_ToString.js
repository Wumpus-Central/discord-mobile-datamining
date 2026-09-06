// === Module 4832: ToString ===

// Module 4832 (ToString)
import getEvalledConstructor from "getEvalledConstructor" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;

let closure_2 = getEvalledConstructor("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1283("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return callback(arg0);
  }
};