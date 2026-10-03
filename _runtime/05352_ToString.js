// === Module 5352: ToString ===

// Module 5352 (ToString)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;

let closure_2 = _mod1292("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1293("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
};