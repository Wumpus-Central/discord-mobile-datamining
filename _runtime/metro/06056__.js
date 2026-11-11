// _runtime/metro/06056__.js
import _mod545 from "00545__.js";
import object from "../06057_object.js";
import _mod6058 from "06058__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod6058(arg0));
    }
    return {};
  }
}
