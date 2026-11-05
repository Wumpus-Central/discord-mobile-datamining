// === Module 16421: ? ===

// Module 16421
import _mod16390 from "module_16390" /* 16390 */;
import element from "element" /* 16422 */;
import getOwnPropertyDescriptor from "module_16389" /* 16389 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16390(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;