// _runtime/metro/15355__.js
import _mod15324 from "15324__.js";
import element from "../15356_element.js";
import getOwnPropertyDescriptor from "15323__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15324(
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
