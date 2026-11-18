// _runtime/metro/15500__.js
import _mod15469 from "15469__.js";
import element from "../15501_element.js";
import getOwnPropertyDescriptor from "15468__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15469(
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
