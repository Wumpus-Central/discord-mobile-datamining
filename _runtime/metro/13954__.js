// _runtime/metro/13954__.js
import _mod13923 from "13923__.js";
import element from "../13955_element.js";
import getOwnPropertyDescriptor from "../13922_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13923(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;