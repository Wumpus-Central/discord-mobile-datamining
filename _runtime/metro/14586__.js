// === Module 14586: ? ===

// Module 14586
import _mod14555 from "module_14555" /* 14555 */;
import element from "element" /* 14587 */;
import getOwnPropertyDescriptor from "module_14554" /* 14554 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14555(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;