// _runtime/metro/15580__.js
import _mod15549 from "15549__.js";
import element from "../15581_element.js";
import getOwnPropertyDescriptor from "15548__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15549(
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
