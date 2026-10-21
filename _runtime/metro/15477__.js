// === Module 15477: ? ===

// Module 15477
import _mod15446 from "module_15446" /* 15446 */;
import element from "element" /* 15478 */;
import getOwnPropertyDescriptor from "module_15445" /* 15445 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15446(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;