// _runtime/metro/13920__.js
import _mod13889 from "13889__.js";
import element from "../13921_element.js";
import getOwnPropertyDescriptor from "../13888_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13889(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;