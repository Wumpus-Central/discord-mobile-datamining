// _runtime/metro/05812__.js
import _mod545 from "00545__.js";
import object from "../05813_object.js";
import _mod5814 from "05814__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5814(arg0));
    }
    return {};
  }
}
