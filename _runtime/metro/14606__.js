// _runtime/metro/14606__.js
import _mod14575 from "14575__.js";
import element from "../14607_element.js";
import getOwnPropertyDescriptor from "14574__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14575(
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
