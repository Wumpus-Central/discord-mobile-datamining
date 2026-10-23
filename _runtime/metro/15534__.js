// _runtime/metro/15534__.js
import _mod15503 from "15503__.js";
import element from "../15535_element.js";
import getOwnPropertyDescriptor from "15502__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15503(
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
