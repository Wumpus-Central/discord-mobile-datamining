// _runtime/metro/05723__.js
import _mod545 from "00545__.js";
import object from "../05724_object.js";
import _mod5725 from "05725__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5725(arg0));
    }
    return {};
  }
}
