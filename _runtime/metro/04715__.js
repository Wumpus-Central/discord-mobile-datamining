// _runtime/metro/04715__.js
import _mod545 from "00545__.js";
import object from "../04716_object.js";
import _mod4717 from "04717__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4717(arg0));
    }
    return {};
  }
}
