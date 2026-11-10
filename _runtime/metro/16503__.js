// _runtime/metro/16503__.js
import _mod16472 from "16472__.js";
import element from "../16504_element.js";
import getOwnPropertyDescriptor from "16471__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16472(
    () =>
      7 !==
      Object.defineProperty(element("div"), "a", {
        get() {
          return 7;
        },
      }).a,
  );
}

export default tmp2;
