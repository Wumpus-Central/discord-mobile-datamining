// === Module 15575: ? ===

// Module 15575
import _mod15544 from "module_15544" /* 15544 */;
import element from "element" /* 15576 */;
import getOwnPropertyDescriptor from "module_15543" /* 15543 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15544(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;