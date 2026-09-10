// === Module 14409: ? ===

// Module 14409
import _mod14378 from "module_14378" /* 14378 */;
import element from "element" /* 14410 */;
import getOwnPropertyDescriptor from "module_14377" /* 14377 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14378(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;