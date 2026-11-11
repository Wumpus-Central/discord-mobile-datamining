// === Module 16664: ? ===

// Module 16664
import _mod16633 from "module_16633" /* 16633 */;
import element from "element" /* 16665 */;
import getOwnPropertyDescriptor from "module_16632" /* 16632 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16633(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;