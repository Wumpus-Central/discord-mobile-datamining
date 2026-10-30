// _runtime/metro/16118__.js
import _mod16087 from "16087__.js";
import element from "../16119_element.js";
import getOwnPropertyDescriptor from "16086__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16087(
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
