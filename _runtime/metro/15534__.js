// === Module 15534: ? ===

// Module 15534
import _mod15503 from "module_15503" /* 15503 */;
import element from "element" /* 15535 */;
import getOwnPropertyDescriptor from "module_15502" /* 15502 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15503(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;