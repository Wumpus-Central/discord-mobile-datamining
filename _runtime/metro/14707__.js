// === Module 14707: ? ===

// Module 14707
import _mod14676 from "module_14676" /* 14676 */;
import element from "element" /* 14708 */;
import getOwnPropertyDescriptor from "module_14675" /* 14675 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14676(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;