// _runtime/metro/15477__.js
import _mod15446 from "15446__.js";
import element from "../15478_element.js";
import getOwnPropertyDescriptor from "15445__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15446(
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
