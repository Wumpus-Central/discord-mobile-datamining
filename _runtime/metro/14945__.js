// === Module 14945: ? ===

// Module 14945
import _mod14914 from "module_14914" /* 14914 */;
import element from "element" /* 14946 */;
import getOwnPropertyDescriptor from "module_14913" /* 14913 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14914(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;