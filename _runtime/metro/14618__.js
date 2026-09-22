// _runtime/metro/14618__.js
import _mod14587 from "14587__.js";
import element from "../14619_element.js";
import getOwnPropertyDescriptor from "14586__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14587(
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
