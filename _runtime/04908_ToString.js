// === Module 4908: ToString ===

// Module 4908 (ToString)
import _mod1280 from "module_1280" /* 1280 */;
import _mod1281 from "module_1281" /* 1281 */;

let closure_2 = _mod1280("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1281("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
};