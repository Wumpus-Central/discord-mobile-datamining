// _runtime/metro/15571__.js
import _mod15540 from "15540__.js";
import element from "../15572_element.js";
import getOwnPropertyDescriptor from "15539__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15540(
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
