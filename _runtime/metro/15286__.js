// === Module 15286: ? ===

// Module 15286
import _mod15255 from "module_15255" /* 15255 */;
import element from "element" /* 15287 */;
import getOwnPropertyDescriptor from "module_15254" /* 15254 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15255(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;