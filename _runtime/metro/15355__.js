// === Module 15355: ? ===

// Module 15355
import _mod15324 from "module_15324" /* 15324 */;
import element from "element" /* 15356 */;
import getOwnPropertyDescriptor from "module_15323" /* 15323 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15324(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;