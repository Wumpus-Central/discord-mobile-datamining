// === Module 14606: ? ===

// Module 14606
import _mod14575 from "module_14575" /* 14575 */;
import element from "element" /* 14607 */;
import getOwnPropertyDescriptor from "module_14574" /* 14574 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14575(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;