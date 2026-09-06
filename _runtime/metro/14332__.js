// === Module 14332: ? ===

// Module 14332
import _mod14301 from "module_14301" /* 14301 */;
import element from "element" /* 14333 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14300 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14301(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;