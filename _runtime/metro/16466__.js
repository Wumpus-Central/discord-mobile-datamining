// === Module 16466: ? ===

// Module 16466
import _mod16435 from "module_16435" /* 16435 */;
import element from "element" /* 16467 */;
import getOwnPropertyDescriptor from "module_16434" /* 16434 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16435(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;