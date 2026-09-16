// === Module 14448: ? ===

// Module 14448
import _mod14417 from "module_14417" /* 14417 */;
import element from "element" /* 14449 */;
import getOwnPropertyDescriptor from "module_14416" /* 14416 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14417(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;