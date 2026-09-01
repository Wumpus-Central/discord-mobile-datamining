// _runtime/metro/13987__.js
import _mod13956 from "13956__.js";
import element from "../13988_element.js";
import getOwnPropertyDescriptor from "../13955_getOwnPropertyDescriptor.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13956(
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
