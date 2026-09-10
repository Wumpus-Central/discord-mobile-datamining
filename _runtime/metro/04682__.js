// _runtime/metro/04682__.js
import _mod545 from "00545__.js";
import object from "../04683_object.js";
import _mod4684 from "04684__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4684(arg0));
    }
    return {};
  }
}
