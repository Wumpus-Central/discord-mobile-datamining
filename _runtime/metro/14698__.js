// _runtime/metro/14698__.js
import _mod14667 from "14667__.js";
import element from "../14699_element.js";
import getOwnPropertyDescriptor from "14666__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14667(
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
