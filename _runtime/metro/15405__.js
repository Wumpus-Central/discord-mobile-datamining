// _runtime/metro/15405__.js
import _mod15374 from "15374__.js";
import element from "../15406_element.js";
import getOwnPropertyDescriptor from "15373__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15374(
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
