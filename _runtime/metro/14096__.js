// _runtime/metro/14096__.js
import _mod14065 from "14065__.js";
import element from "../14097_element.js";
import getOwnPropertyDescriptor from "14064__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14065(
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
