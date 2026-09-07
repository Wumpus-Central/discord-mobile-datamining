// _runtime/metro/14335__.js
import _mod14304 from "14304__.js";
import element from "../14336_element.js";
import getOwnPropertyDescriptor from "14303__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14304(
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
