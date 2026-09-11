// _runtime/metro/04683__.js
import _mod545 from "00545__.js";
import object from "../04684_object.js";
import _mod4685 from "04685__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4685(arg0));
    }
    return {};
  }
}
