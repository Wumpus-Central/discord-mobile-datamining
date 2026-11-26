// _runtime/metro/15767__.js
import _mod15736 from "15736__.js";
import element from "../15768_element.js";
import getOwnPropertyDescriptor from "15735__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod15736(
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
