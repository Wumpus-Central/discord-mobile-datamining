// _runtime/metro/13901__.js
import _mod13870 from "13870__.js";
import element from "../13902_element.js";
import getOwnPropertyDescriptor from "../13869_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13870(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;