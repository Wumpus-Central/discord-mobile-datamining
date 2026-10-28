// _runtime/metro/05798__.js
import _mod545 from "00545__.js";
import object from "../05799_object.js";
import _mod5800 from "05800__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5800(arg0));
    }
    return {};
  }
}
