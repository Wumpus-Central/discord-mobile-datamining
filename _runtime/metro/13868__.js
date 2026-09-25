// _runtime/metro/13868__.js
import _mod13837 from "13837__.js";
import element from "../13869_element.js";
import getOwnPropertyDescriptor from "13836__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13837(
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
