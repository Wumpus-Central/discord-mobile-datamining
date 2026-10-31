// _runtime/metro/16159__.js
import _mod16128 from "16128__.js";
import element from "../16160_element.js";
import getOwnPropertyDescriptor from "16127__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16128(
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
