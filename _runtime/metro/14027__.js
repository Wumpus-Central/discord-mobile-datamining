// === Module 14027: ? ===

// Module 14027
import _mod13996 from "module_13996" /* 13996 */;
import element from "element" /* 14028 */;
import getOwnPropertyDescriptor from "module_13995" /* 13995 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13996(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;