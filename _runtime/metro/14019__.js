// === Module 14019: ? ===

// Module 14019
import _mod13988 from "module_13988" /* 13988 */;
import element from "element" /* 14020 */;
import getOwnPropertyDescriptor from "module_13987" /* 13987 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13988(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;