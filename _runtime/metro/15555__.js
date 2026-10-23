// _runtime/metro/15555__.js
import _mod15524 from "15524__.js";
import element from "../15556_element.js";
import getOwnPropertyDescriptor from "15523__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15524(
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
