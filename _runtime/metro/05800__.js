// _runtime/metro/05800__.js
import _mod545 from "00545__.js";
import object from "../05801_object.js";
import _mod5802 from "05802__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5802(arg0));
    }
    return {};
  }
}
