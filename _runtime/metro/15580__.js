// === Module 15580: ? ===

// Module 15580
import _mod15549 from "module_15549" /* 15549 */;
import element from "element" /* 15581 */;
import getOwnPropertyDescriptor from "module_15548" /* 15548 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15549(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;