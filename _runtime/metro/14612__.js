// === Module 14612: ? ===

// Module 14612
import _mod14581 from "module_14581" /* 14581 */;
import element from "element" /* 14613 */;
import getOwnPropertyDescriptor from "module_14580" /* 14580 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14581(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;