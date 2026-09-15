// _runtime/metro/14430__.js
import _mod14399 from "14399__.js";
import element from "../14431_element.js";
import getOwnPropertyDescriptor from "14398__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14399(
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
