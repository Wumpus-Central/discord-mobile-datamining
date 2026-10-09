// _runtime/metro/05159__.js
import _mod545 from "00545__.js";
import object from "../05160_object.js";
import _mod5161 from "05161__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5161(arg0));
    }
    return {};
  }
}
