// _runtime/metro/05581__.js
import _mod545 from "00545__.js";
import object from "../05582_object.js";
import _mod5583 from "05583__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5583(arg0));
    }
    return {};
  }
}
