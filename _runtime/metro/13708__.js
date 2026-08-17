// _runtime/metro/13708__.js
import _mod13677 from "13677__.js";
import element from "../13709_element.js";
import getOwnPropertyDescriptor from "../13676_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13677(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;