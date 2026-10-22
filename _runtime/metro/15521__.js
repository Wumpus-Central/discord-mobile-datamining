// === Module 15521: ? ===

// Module 15521
import _mod15490 from "module_15490" /* 15490 */;
import element from "element" /* 15522 */;
import getOwnPropertyDescriptor from "module_15489" /* 15489 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15490(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;