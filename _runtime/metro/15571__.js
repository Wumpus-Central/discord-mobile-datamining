// === Module 15571: ? ===

// Module 15571
import _mod15540 from "module_15540" /* 15540 */;
import element from "element" /* 15572 */;
import getOwnPropertyDescriptor from "module_15539" /* 15539 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15540(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;