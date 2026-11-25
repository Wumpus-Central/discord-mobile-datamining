// _runtime/metro/15716__.js
import _mod15685 from "15685__.js";
import element from "../15717_element.js";
import getOwnPropertyDescriptor from "15684__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15685(
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
