// === Module 16408: ? ===

// Module 16408
import _mod16377 from "module_16377" /* 16377 */;
import element from "element" /* 16409 */;
import getOwnPropertyDescriptor from "module_16376" /* 16376 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16377(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;