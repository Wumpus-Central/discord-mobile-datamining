// _runtime/metro/14385__.js
import _mod14354 from "14354__.js";
import element from "../14386_element.js";
import getOwnPropertyDescriptor from "14353__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14354(
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
