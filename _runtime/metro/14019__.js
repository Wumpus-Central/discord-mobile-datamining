// _runtime/metro/14019__.js
import _mod13988 from "13988__.js";
import element from "../14020_element.js";
import getOwnPropertyDescriptor from "13987__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13988(
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
