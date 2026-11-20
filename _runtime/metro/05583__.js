// _runtime/metro/05583__.js
import _mod545 from "00545__.js";
import object from "../05584_object.js";
import _mod5585 from "05585__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5585(arg0));
    }
    return {};
  }
}
