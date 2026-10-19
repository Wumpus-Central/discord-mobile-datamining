// === Module 15359: ? ===

// Module 15359
import _mod15328 from "module_15328" /* 15328 */;
import element from "element" /* 15360 */;
import getOwnPropertyDescriptor from "module_15327" /* 15327 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15328(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;