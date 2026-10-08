// === Module 14413: ? ===

// Module 14413
import _mod14382 from "module_14382" /* 14382 */;
import element from "element" /* 14414 */;
import getOwnPropertyDescriptor from "module_14381" /* 14381 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14382(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;