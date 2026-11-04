// === Module 16395: ? ===

// Module 16395
import _mod16364 from "module_16364" /* 16364 */;
import element from "element" /* 16396 */;
import getOwnPropertyDescriptor from "module_16363" /* 16363 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16364(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;