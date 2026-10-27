// === Module 15616: ? ===

// Module 15616
import _mod15585 from "module_15585" /* 15585 */;
import element from "element" /* 15617 */;
import getOwnPropertyDescriptor from "module_15584" /* 15584 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15585(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;