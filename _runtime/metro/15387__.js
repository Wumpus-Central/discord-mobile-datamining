// === Module 15387: ? ===

// Module 15387
import _mod15356 from "module_15356" /* 15356 */;
import element from "element" /* 15388 */;
import getOwnPropertyDescriptor from "module_15355" /* 15355 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15356(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;