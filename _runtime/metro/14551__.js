// _runtime/metro/14551__.js
import _mod14520 from "14520__.js";
import element from "../14552_element.js";
import getOwnPropertyDescriptor from "14519__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14520(
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
