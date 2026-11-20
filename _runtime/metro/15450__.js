// === Module 15450: ? ===

// Module 15450
import _mod15419 from "module_15419" /* 15419 */;
import element from "element" /* 15451 */;
import getOwnPropertyDescriptor from "module_15418" /* 15418 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15419(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;