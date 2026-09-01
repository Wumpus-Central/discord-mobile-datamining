// === Module 13987: ? ===

// Module 13987
import _mod13956 from "module_13956" /* 13956 */;
import element from "element" /* 13988 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13955 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13956(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;