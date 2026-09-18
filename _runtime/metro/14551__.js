// === Module 14551: ? ===

// Module 14551
import _mod14520 from "module_14520" /* 14520 */;
import element from "element" /* 14552 */;
import getOwnPropertyDescriptor from "module_14519" /* 14519 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14520(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;