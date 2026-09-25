// === Module 13868: ? ===

// Module 13868
import _mod13837 from "module_13837" /* 13837 */;
import element from "element" /* 13869 */;
import getOwnPropertyDescriptor from "module_13836" /* 13836 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13837(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;