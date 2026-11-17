// === Module 16817: ? ===

// Module 16817
import _mod16786 from "module_16786" /* 16786 */;
import element from "element" /* 16818 */;
import getOwnPropertyDescriptor from "module_16785" /* 16785 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16786(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;