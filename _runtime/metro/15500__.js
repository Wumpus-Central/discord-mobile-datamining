// === Module 15500: ? ===

// Module 15500
import _mod15469 from "module_15469" /* 15469 */;
import element from "element" /* 15501 */;
import getOwnPropertyDescriptor from "module_15468" /* 15468 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15469(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;