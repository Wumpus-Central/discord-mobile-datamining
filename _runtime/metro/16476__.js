// _runtime/metro/16476__.js
import _mod16445 from "16445__.js";
import element from "../16477_element.js";
import getOwnPropertyDescriptor from "16444__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16445(
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
