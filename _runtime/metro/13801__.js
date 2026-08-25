// _runtime/metro/13801__.js
import _mod13770 from "13770__.js";
import element from "../13802_element.js";
import getOwnPropertyDescriptor from "../13769_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13770(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;