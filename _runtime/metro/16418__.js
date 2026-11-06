// _runtime/metro/16418__.js
import _mod16387 from "16387__.js";
import element from "../16419_element.js";
import getOwnPropertyDescriptor from "16386__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16387(
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
