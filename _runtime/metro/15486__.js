// === Module 15486: ? ===

// Module 15486
import _mod15455 from "module_15455" /* 15455 */;
import element from "element" /* 15487 */;
import getOwnPropertyDescriptor from "module_15454" /* 15454 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15455(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;