// _runtime/metro/14409__.js
import _mod14378 from "14378__.js";
import element from "../14410_element.js";
import getOwnPropertyDescriptor from "14377__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14378(
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
