// _runtime/metro/05941__.js
import _mod545 from "00545__.js";
import object from "../05942_object.js";
import _mod5943 from "05943__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5943(arg0));
    }
    return {};
  }
}
