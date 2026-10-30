// === Module 6479: ToString ===

// Module 6479 (ToString)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;

let closure_2 = _mod1293("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1294("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
};