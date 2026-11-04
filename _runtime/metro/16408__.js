// _runtime/metro/16408__.js
import _mod16377 from "16377__.js";
import element from "../16409_element.js";
import getOwnPropertyDescriptor from "16376__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16377(
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
