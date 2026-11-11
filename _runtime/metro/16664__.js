// _runtime/metro/16664__.js
import _mod16633 from "16633__.js";
import element from "../16665_element.js";
import getOwnPropertyDescriptor from "16632__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16633(
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
