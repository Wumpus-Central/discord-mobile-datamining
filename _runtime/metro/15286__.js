// _runtime/metro/15286__.js
import _mod15255 from "15255__.js";
import element from "../15287_element.js";
import getOwnPropertyDescriptor from "15254__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15255(
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
