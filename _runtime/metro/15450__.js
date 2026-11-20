// _runtime/metro/15450__.js
import _mod15419 from "15419__.js";
import element from "../15451_element.js";
import getOwnPropertyDescriptor from "15418__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15419(
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
