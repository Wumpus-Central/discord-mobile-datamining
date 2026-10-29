// === Module 16078: ? ===

// Module 16078
import _mod16047 from "module_16047" /* 16047 */;
import element from "element" /* 16079 */;
import getOwnPropertyDescriptor from "module_16046" /* 16046 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16047(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;