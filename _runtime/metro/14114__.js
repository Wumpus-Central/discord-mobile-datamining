// === Module 14114: ? ===

// Module 14114
import _mod14083 from "module_14083" /* 14083 */;
import element from "element" /* 14115 */;
import getOwnPropertyDescriptor from "module_14082" /* 14082 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14083(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;