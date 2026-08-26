// === Module 13874: ? ===

// Module 13874
import _mod13843 from "module_13843" /* 13843 */;
import element from "element" /* 13875 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13842 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13843(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;