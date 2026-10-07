// _runtime/metro/14114__.js
import _mod14083 from "14083__.js";
import element from "../14115_element.js";
import getOwnPropertyDescriptor from "14082__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14083(
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
