import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13482")(() => 7 !== Object.defineProperty(require(13514) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;