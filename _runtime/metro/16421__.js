// _runtime/metro/16421__.js
import _mod16390 from "16390__.js";
import element from "../16422_element.js";
import getOwnPropertyDescriptor from "16389__.js";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod16390(
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
