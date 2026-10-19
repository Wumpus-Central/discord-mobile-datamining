// _runtime/metro/15387__.js
import _mod15356 from "15356__.js";
import element from "../15388_element.js";
import getOwnPropertyDescriptor from "15355__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15356(
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
