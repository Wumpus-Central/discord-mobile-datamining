// _runtime/metro/04713__.js
import _mod545 from "00545__.js";
import object from "../04714_object.js";
import _mod4715 from "04715__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4715(arg0));
    }
    return {};
  }
}
