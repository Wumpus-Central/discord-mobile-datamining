// _runtime/metro/14226__.js
import _mod14195 from "14195__.js";
import element from "../14227_element.js";
import getOwnPropertyDescriptor from "../14194_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14195(
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
