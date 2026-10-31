// === Module 16159: ? ===

// Module 16159
import _mod16128 from "module_16128" /* 16128 */;
import element from "element" /* 16160 */;
import getOwnPropertyDescriptor from "module_16127" /* 16127 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16128(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;