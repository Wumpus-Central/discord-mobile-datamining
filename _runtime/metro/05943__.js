// _runtime/metro/05943__.js
import _mod545 from "00545__.js";
import object from "../05944_object.js";
import _mod5945 from "05945__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5945(arg0));
    }
    return {};
  }
}
