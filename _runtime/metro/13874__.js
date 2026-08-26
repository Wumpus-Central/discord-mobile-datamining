// _runtime/metro/13874__.js
import _mod13843 from "13843__.js";
import element from "../13875_element.js";
import getOwnPropertyDescriptor from "../13842_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13843(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;