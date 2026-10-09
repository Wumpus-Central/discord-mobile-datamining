// _runtime/metro/14509__.js
import _mod14478 from "14478__.js";
import element from "../14510_element.js";
import getOwnPropertyDescriptor from "14477__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14478(
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
