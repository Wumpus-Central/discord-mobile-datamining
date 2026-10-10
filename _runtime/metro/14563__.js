// === Module 14563: ? ===

// Module 14563
import _mod14532 from "module_14532" /* 14532 */;
import element from "element" /* 14564 */;
import getOwnPropertyDescriptor from "module_14531" /* 14531 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14532(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;