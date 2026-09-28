// === Module 13823: ? ===

// Module 13823
import _mod13792 from "module_13792" /* 13792 */;
import element from "element" /* 13824 */;
import getOwnPropertyDescriptor from "module_13791" /* 13791 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13792(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;