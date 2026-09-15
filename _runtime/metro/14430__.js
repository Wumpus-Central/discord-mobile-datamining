// === Module 14430: ? ===

// Module 14430
import _mod14399 from "module_14399" /* 14399 */;
import element from "element" /* 14431 */;
import getOwnPropertyDescriptor from "module_14398" /* 14398 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14399(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;