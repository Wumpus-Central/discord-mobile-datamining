// === Module 15579: ? ===

// Module 15579
import _mod15548 from "module_15548" /* 15548 */;
import element from "element" /* 15580 */;
import getOwnPropertyDescriptor from "module_15547" /* 15547 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15548(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;