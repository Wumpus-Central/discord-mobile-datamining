// === Module 15405: ? ===

// Module 15405
import _mod15374 from "module_15374" /* 15374 */;
import element from "element" /* 15406 */;
import getOwnPropertyDescriptor from "module_15373" /* 15373 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15374(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;