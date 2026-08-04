// _runtime/metro/13416__.js
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13385")(() => 7 !== Object.defineProperty(require(13417) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;