// === Module 16306: ? ===

// Module 16306
import _mod16275 from "module_16275" /* 16275 */;
import element from "element" /* 16307 */;
import getOwnPropertyDescriptor from "module_16274" /* 16274 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16275(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;