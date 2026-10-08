// _runtime/metro/05158__.js
import _mod545 from "00545__.js";
import object from "../05159_object.js";
import _mod5160 from "05160__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5160(arg0));
    }
    return {};
  }
}
