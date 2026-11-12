// === Module 16659: ? ===

// Module 16659
import _mod16628 from "module_16628" /* 16628 */;
import element from "element" /* 16660 */;
import getOwnPropertyDescriptor from "module_16627" /* 16627 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16628(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;