// _runtime/metro/16782__.js
import _mod16751 from "16751__.js";
import element from "../16783_element.js";
import getOwnPropertyDescriptor from "16750__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16751(
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
