// _runtime/metro/15486__.js
import _mod15455 from "15455__.js";
import element from "../15487_element.js";
import getOwnPropertyDescriptor from "15454__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15455(
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
