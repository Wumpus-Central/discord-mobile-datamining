// === Module 16782: ? ===

// Module 16782
import _mod16751 from "module_16751" /* 16751 */;
import element from "element" /* 16783 */;
import getOwnPropertyDescriptor from "module_16750" /* 16750 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16751(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;