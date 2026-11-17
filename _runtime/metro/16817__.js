// _runtime/metro/16817__.js
import _mod16786 from "16786__.js";
import element from "../16818_element.js";
import getOwnPropertyDescriptor from "16785__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16786(
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
