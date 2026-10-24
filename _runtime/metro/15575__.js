// _runtime/metro/15575__.js
import _mod15544 from "15544__.js";
import element from "../15576_element.js";
import getOwnPropertyDescriptor from "15543__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15544(
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
