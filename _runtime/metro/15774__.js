// _runtime/metro/15774__.js
import _mod15743 from "15743__.js";
import element from "../15775_element.js";
import getOwnPropertyDescriptor from "15742__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15743(
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
