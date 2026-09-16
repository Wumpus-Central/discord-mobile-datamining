// _runtime/metro/14448__.js
import _mod14417 from "14417__.js";
import element from "../14449_element.js";
import getOwnPropertyDescriptor from "14416__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14417(
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
