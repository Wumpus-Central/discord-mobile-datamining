// === Module 14385: ? ===

// Module 14385
import _mod14354 from "module_14354" /* 14354 */;
import element from "element" /* 14386 */;
import getOwnPropertyDescriptor from "module_14353" /* 14353 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14354(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;