// _runtime/metro/13512__.js
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13481")(() => 7 !== Object.defineProperty(require("../13513_element.js") /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;