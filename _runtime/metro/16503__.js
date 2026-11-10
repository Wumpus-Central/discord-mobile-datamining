// === Module 16503: ? ===

// Module 16503
import _mod16472 from "module_16472" /* 16472 */;
import element from "element" /* 16504 */;
import getOwnPropertyDescriptor from "module_16471" /* 16471 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16472(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;