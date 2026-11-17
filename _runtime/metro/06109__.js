// _runtime/metro/06109__.js
import _mod545 from "00545__.js";
import object from "../06110_object.js";
import _mod6111 from "06111__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod6111(arg0));
    }
    return {};
  }
}
