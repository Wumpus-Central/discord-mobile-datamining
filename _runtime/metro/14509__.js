// === Module 14509: ? ===

// Module 14509
import _mod14478 from "module_14478" /* 14478 */;
import element from "element" /* 14510 */;
import getOwnPropertyDescriptor from "module_14477" /* 14477 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14478(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;