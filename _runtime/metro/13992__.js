// === Module 13992: ? ===

// Module 13992
import _mod13961 from "module_13961" /* 13961 */;
import element from "element" /* 13993 */;
import getOwnPropertyDescriptor from "module_13960" /* 13960 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13961(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;