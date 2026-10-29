// _runtime/metro/16078__.js
import _mod16047 from "16047__.js";
import element from "../16079_element.js";
import getOwnPropertyDescriptor from "16046__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16047(
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
