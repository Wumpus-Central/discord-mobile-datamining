// _runtime/metro/04651__.js
import _mod545 from "00545__.js";
import object from "../04652_object.js";
import _mod4653 from "04653__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4653(arg0));
    }
    return {};
  }
}
