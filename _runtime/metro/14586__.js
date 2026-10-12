// _runtime/metro/14586__.js
import _mod14555 from "14555__.js";
import element from "../14587_element.js";
import getOwnPropertyDescriptor from "14554__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14555(
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
