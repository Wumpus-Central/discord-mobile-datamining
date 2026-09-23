// === Module 14698: ? ===

// Module 14698
import _mod14667 from "module_14667" /* 14667 */;
import element from "element" /* 14699 */;
import getOwnPropertyDescriptor from "module_14666" /* 14666 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14667(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;