// _runtime/metro/16659__.js
import _mod16628 from "16628__.js";
import element from "../16660_element.js";
import getOwnPropertyDescriptor from "16627__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16628(
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
