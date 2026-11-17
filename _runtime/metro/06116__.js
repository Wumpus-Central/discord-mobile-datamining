// _runtime/metro/06116__.js
import _mod545 from "00545__.js";
import object from "../06117_object.js";
import _mod6118 from "06118__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod6118(arg0));
    }
    return {};
  }
}
