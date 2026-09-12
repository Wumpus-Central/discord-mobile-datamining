// _runtime/metro/14420__.js
import _mod14389 from "14389__.js";
import element from "../14421_element.js";
import getOwnPropertyDescriptor from "14388__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14389(
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
