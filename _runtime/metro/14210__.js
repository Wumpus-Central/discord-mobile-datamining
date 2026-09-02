// === Module 14210: ? ===

// Module 14210
import _mod14179 from "module_14179" /* 14179 */;
import element from "element" /* 14211 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14178 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14179(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;