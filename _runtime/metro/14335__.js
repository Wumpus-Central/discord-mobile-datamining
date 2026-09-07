// === Module 14335: ? ===

// Module 14335
import _mod14304 from "module_14304" /* 14304 */;
import element from "element" /* 14336 */;
import getOwnPropertyDescriptor from "module_14303" /* 14303 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14304(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;