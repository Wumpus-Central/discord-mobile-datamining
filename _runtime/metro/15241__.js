// === Module 15241: ? ===

// Module 15241
import _mod15210 from "module_15210" /* 15210 */;
import element from "element" /* 15242 */;
import getOwnPropertyDescriptor from "module_15209" /* 15209 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15210(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;