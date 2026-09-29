// _runtime/metro/13992__.js
import _mod13961 from "13961__.js";
import element from "../13993_element.js";
import getOwnPropertyDescriptor from "13960__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13961(
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
