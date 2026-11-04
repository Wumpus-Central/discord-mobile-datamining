// _runtime/metro/16395__.js
import _mod16364 from "16364__.js";
import element from "../16396_element.js";
import getOwnPropertyDescriptor from "16363__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16364(
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
