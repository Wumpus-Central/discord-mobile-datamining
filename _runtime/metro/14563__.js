// _runtime/metro/14563__.js
import _mod14532 from "14532__.js";
import element from "../14564_element.js";
import getOwnPropertyDescriptor from "14531__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14532(
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
