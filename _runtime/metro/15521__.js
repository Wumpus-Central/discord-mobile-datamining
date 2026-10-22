// _runtime/metro/15521__.js
import _mod15490 from "15490__.js";
import element from "../15522_element.js";
import getOwnPropertyDescriptor from "15489__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15490(
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
