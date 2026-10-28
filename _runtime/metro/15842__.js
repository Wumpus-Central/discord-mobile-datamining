// === Module 15842: ? ===

// Module 15842
import _mod15811 from "module_15811" /* 15811 */;
import element from "element" /* 15843 */;
import getOwnPropertyDescriptor from "module_15810" /* 15810 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15811(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;