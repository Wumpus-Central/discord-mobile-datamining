// === Module 15716: ? ===

// Module 15716
import _mod15685 from "module_15685" /* 15685 */;
import element from "element" /* 15717 */;
import getOwnPropertyDescriptor from "module_15684" /* 15684 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15685(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;