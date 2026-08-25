// === Module 13801: ? ===

// Module 13801
import _mod13770 from "module_13770" /* 13770 */;
import element from "element" /* 13802 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13769 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13770(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;