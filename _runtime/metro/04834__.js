// _runtime/metro/04834__.js
import _mod545 from "00545__.js";
import object from "../04835_object.js";
import _mod4836 from "04836__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4836(arg0));
    }
    return {};
  }
}
