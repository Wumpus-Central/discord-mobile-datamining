// _runtime/metro/14332__.js
import _mod14301 from "14301__.js";
import element from "../14333_element.js";
import getOwnPropertyDescriptor from "../14300_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14301(
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
