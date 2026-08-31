// === Module 13954: ? ===

// Module 13954
import _mod13923 from "module_13923" /* 13923 */;
import element from "element" /* 13955 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13922 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13923(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;