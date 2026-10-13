// _runtime/metro/14907__.js
import _mod14876 from "14876__.js";
import element from "../14908_element.js";
import getOwnPropertyDescriptor from "14875__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14876(
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
