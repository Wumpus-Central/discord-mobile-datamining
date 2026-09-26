// === Module 13824: ? ===

// Module 13824
import _mod13793 from "module_13793" /* 13793 */;
import element from "element" /* 13825 */;
import getOwnPropertyDescriptor from "module_13792" /* 13792 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13793(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;