// _runtime/metro/15594__.js
import _mod15563 from "15563__.js";
import element from "../15595_element.js";
import getOwnPropertyDescriptor from "15562__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15563(
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
