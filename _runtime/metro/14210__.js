// _runtime/metro/14210__.js
import _mod14179 from "14179__.js";
import element from "../14211_element.js";
import getOwnPropertyDescriptor from "../14178_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14179(
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
