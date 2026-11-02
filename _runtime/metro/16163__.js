// === Module 16163: ? ===

// Module 16163
import _mod16132 from "module_16132" /* 16132 */;
import element from "element" /* 16164 */;
import getOwnPropertyDescriptor from "module_16131" /* 16131 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16132(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;