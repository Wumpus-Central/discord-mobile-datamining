// === Module 5674: ToString ===

// Module 5674 (ToString)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;

let closure_2 = _mod1305("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1306("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
};