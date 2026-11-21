// === Module 15573: ? ===

// Module 15573
import _mod15542 from "module_15542" /* 15542 */;
import element from "element" /* 15574 */;
import getOwnPropertyDescriptor from "module_15541" /* 15541 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15542(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;