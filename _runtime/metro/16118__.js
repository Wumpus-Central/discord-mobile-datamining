// === Module 16118: ? ===

// Module 16118
import _mod16087 from "module_16087" /* 16087 */;
import element from "element" /* 16119 */;
import getOwnPropertyDescriptor from "module_16086" /* 16086 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16087(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;