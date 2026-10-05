// === Module 14096: ? ===

// Module 14096
import _mod14065 from "module_14065" /* 14065 */;
import element from "element" /* 14097 */;
import getOwnPropertyDescriptor from "module_14064" /* 14064 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14065(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;