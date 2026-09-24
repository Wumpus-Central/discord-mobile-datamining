// _runtime/metro/14707__.js
import _mod14676 from "14676__.js";
import element from "../14708_element.js";
import getOwnPropertyDescriptor from "14675__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14676(
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
