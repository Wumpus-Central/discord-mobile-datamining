// _runtime/metro/13766__.js
import _mod13735 from "13735__.js";
import element from "../13767_element.js";
import getOwnPropertyDescriptor from "../13734_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13735(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;