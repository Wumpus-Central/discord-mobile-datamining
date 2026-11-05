// _runtime/metro/05949__.js
import _mod545 from "00545__.js";
import object from "../05950_object.js";
import _mod5951 from "05951__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5951(arg0));
    }
    return {};
  }
}
