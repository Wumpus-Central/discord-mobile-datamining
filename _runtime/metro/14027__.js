// _runtime/metro/14027__.js
import _mod13996 from "13996__.js";
import element from "../14028_element.js";
import getOwnPropertyDescriptor from "13995__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13996(
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
