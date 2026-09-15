// _runtime/metro/04716__.js
import _mod545 from "00545__.js";
import object from "../04717_object.js";
import _mod4718 from "04718__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4718(arg0));
    }
    return {};
  }
}
