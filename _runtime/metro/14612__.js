// _runtime/metro/14612__.js
import _mod14581 from "14581__.js";
import element from "../14613_element.js";
import getOwnPropertyDescriptor from "14580__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14581(
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
