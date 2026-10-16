// _runtime/metro/15276__.js
import _mod15245 from "15245__.js";
import element from "../15277_element.js";
import getOwnPropertyDescriptor from "15244__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15245(
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
