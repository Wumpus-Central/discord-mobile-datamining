// _runtime/metro/14413__.js
import _mod14382 from "14382__.js";
import element from "../14414_element.js";
import getOwnPropertyDescriptor from "14381__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14382(
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
