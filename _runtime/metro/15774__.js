// === Module 15774: ? ===

// Module 15774
import _mod15743 from "module_15743" /* 15743 */;
import element from "element" /* 15775 */;
import getOwnPropertyDescriptor from "module_15742" /* 15742 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15743(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;