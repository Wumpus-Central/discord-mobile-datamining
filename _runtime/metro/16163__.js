// _runtime/metro/16163__.js
import _mod16132 from "16132__.js";
import element from "../16164_element.js";
import getOwnPropertyDescriptor from "16131__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16132(
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
