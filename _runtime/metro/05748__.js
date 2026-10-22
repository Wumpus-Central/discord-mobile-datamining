// _runtime/metro/05748__.js
import _mod545 from "00545__.js";
import object from "../05749_object.js";
import _mod5750 from "05750__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5750(arg0));
    }
    return {};
  }
}
