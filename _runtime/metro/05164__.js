// _runtime/metro/05164__.js
import _mod545 from "00545__.js";
import object from "../05165_object.js";
import _mod5166 from "05166__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5166(arg0));
    }
    return {};
  }
}
