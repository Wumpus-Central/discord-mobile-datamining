// === Module 15276: ? ===

// Module 15276
import _mod15245 from "module_15245" /* 15245 */;
import element from "element" /* 15277 */;
import getOwnPropertyDescriptor from "module_15244" /* 15244 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15245(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;