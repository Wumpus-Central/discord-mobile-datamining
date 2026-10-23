// === Module 15555: ? ===

// Module 15555
import _mod15524 from "module_15524" /* 15524 */;
import element from "element" /* 15556 */;
import getOwnPropertyDescriptor from "module_15523" /* 15523 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15524(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;