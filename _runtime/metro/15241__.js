// _runtime/metro/15241__.js
import _mod15210 from "15210__.js";
import element from "../15242_element.js";
import getOwnPropertyDescriptor from "15209__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15210(
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
