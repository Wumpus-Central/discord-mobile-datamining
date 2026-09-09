// === Module 14360: ? ===

// Module 14360
import _mod14329 from "module_14329" /* 14329 */;
import element from "element" /* 14361 */;
import getOwnPropertyDescriptor from "module_14328" /* 14328 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14329(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;