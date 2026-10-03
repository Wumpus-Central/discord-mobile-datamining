// === Module 14094: ? ===

// Module 14094
import _mod14063 from "module_14063" /* 14063 */;
import element from "element" /* 14095 */;
import getOwnPropertyDescriptor from "module_14062" /* 14062 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14063(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;