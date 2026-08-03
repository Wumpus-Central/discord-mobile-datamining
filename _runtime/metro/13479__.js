// === Module 13479: ? ===

// Module 13479
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13448")(() => 7 !== Object.defineProperty(require(13480) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;