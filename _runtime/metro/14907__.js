// === Module 14907: ? ===

// Module 14907
import _mod14876 from "module_14876" /* 14876 */;
import element from "element" /* 14908 */;
import getOwnPropertyDescriptor from "module_14875" /* 14875 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14876(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;