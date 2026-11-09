// === Module 16476: ? ===

// Module 16476
import _mod16445 from "module_16445" /* 16445 */;
import element from "element" /* 16477 */;
import getOwnPropertyDescriptor from "module_16444" /* 16444 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16445(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;