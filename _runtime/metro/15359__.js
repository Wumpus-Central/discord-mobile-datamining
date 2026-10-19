// _runtime/metro/15359__.js
import _mod15328 from "15328__.js";
import element from "../15360_element.js";
import getOwnPropertyDescriptor from "15327__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15328(
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
