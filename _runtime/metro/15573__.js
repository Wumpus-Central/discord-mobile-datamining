// _runtime/metro/15573__.js
import _mod15542 from "15542__.js";
import element from "../15574_element.js";
import getOwnPropertyDescriptor from "15541__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15542(
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
