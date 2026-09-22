// === Module 14618: ? ===

// Module 14618
import _mod14587 from "module_14587" /* 14587 */;
import element from "element" /* 14619 */;
import getOwnPropertyDescriptor from "module_14586" /* 14586 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14587(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;