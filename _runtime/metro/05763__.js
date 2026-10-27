// _runtime/metro/05763__.js
import _mod545 from "00545__.js";
import object from "../05764_object.js";
import _mod5765 from "05765__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5765(arg0));
    }
    return {};
  }
}
