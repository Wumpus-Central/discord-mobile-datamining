// _runtime/metro/14094__.js
import _mod14063 from "14063__.js";
import element from "../14095_element.js";
import getOwnPropertyDescriptor from "14062__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14063(
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
