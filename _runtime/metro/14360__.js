// _runtime/metro/14360__.js
import _mod14329 from "14329__.js";
import element from "../14361_element.js";
import getOwnPropertyDescriptor from "14328__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14329(
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
