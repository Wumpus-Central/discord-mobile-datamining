// _runtime/metro/13824__.js
import _mod13793 from "13793__.js";
import element from "../13825_element.js";
import getOwnPropertyDescriptor from "13792__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13793(
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
