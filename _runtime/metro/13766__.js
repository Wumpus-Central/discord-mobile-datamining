// === Module 13766: ? ===

// Module 13766
import _mod13735 from "module_13735" /* 13735 */;
import element from "element" /* 13767 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13734 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13735(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;