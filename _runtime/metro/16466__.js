// _runtime/metro/16466__.js
import _mod16435 from "16435__.js";
import element from "../16467_element.js";
import getOwnPropertyDescriptor from "16434__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16435(
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
