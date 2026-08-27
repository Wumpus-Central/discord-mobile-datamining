// === Module 13901: ? ===

// Module 13901
import _mod13870 from "module_13870" /* 13870 */;
import element from "element" /* 13902 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13869 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13870(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;