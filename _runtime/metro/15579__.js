// _runtime/metro/15579__.js
import _mod15548 from "15548__.js";
import element from "../15580_element.js";
import getOwnPropertyDescriptor from "15547__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15548(
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
