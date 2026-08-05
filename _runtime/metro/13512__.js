import { element } from "../13513_element.js";
// _runtime/metro/13512__.js
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13481")(() => 7 !== Object.defineProperty(element /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;