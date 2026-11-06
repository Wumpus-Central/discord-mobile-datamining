// === Module 16418: ? ===

// Module 16418
import _mod16387 from "module_16387" /* 16387 */;
import element from "element" /* 16419 */;
import getOwnPropertyDescriptor from "module_16386" /* 16386 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16387(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;