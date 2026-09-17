// _runtime/metro/14456__.js
import _mod14425 from "14425__.js";
import element from "../14457_element.js";
import getOwnPropertyDescriptor from "14424__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14425(
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
