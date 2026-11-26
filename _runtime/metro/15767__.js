// === Module 15767: ? ===

// Module 15767
import _mod15736 from "module_15736" /* 15736 */;
import element from "element" /* 15768 */;
import getOwnPropertyDescriptor from "module_15735" /* 15735 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15736(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;