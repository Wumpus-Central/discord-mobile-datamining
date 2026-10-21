// _runtime/metro/05743__.js
import _mod545 from "00545__.js";
import object from "../05744_object.js";
import _mod5745 from "05745__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5745(arg0));
    }
    return {};
  }
}
