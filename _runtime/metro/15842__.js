// _runtime/metro/15842__.js
import _mod15811 from "15811__.js";
import element from "../15843_element.js";
import getOwnPropertyDescriptor from "15810__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15811(
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
