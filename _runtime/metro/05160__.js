// _runtime/metro/05160__.js
import _mod545 from "00545__.js";
import object from "../05161_object.js";
import _mod5162 from "05162__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5162(arg0));
    }
    return {};
  }
}
