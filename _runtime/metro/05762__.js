// _runtime/metro/05762__.js
import _mod545 from "00545__.js";
import object from "../05763_object.js";
import _mod5764 from "05764__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5764(arg0));
    }
    return {};
  }
}
