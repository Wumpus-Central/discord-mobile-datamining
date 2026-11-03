// _runtime/metro/16306__.js
import _mod16275 from "16275__.js";
import element from "../16307_element.js";
import getOwnPropertyDescriptor from "16274__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16275(
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
