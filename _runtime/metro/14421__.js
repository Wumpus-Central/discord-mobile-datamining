// _runtime/metro/14421__.js
import _mod14390 from "14390__.js";
import element from "../14422_element.js";
import getOwnPropertyDescriptor from "14389__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14390(
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
