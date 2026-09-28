// _runtime/metro/13823__.js
import _mod13792 from "13792__.js";
import element from "../13824_element.js";
import getOwnPropertyDescriptor from "13791__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13792(
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
