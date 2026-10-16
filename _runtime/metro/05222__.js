// _runtime/metro/05222__.js
import _mod545 from "00545__.js";
import object from "../05223_object.js";
import _mod5224 from "05224__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5224(arg0));
    }
    return {};
  }
}
