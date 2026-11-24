// === Module 15594: ? ===

// Module 15594
import _mod15563 from "module_15563" /* 15563 */;
import element from "element" /* 15595 */;
import getOwnPropertyDescriptor from "module_15562" /* 15562 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15563(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;