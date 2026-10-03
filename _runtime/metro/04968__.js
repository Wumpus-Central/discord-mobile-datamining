// _runtime/metro/04968__.js
import _mod545 from "00545__.js";
import object from "../04969_object.js";
import _mod4970 from "04970__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4970(arg0));
    }
    return {};
  }
}
