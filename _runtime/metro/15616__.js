// _runtime/metro/15616__.js
import _mod15585 from "15585__.js";
import element from "../15617_element.js";
import getOwnPropertyDescriptor from "15584__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15585(
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
