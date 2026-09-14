// === Module 14421: ? ===

// Module 14421
import _mod14390 from "module_14390" /* 14390 */;
import element from "element" /* 14422 */;
import getOwnPropertyDescriptor from "module_14389" /* 14389 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14390(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;