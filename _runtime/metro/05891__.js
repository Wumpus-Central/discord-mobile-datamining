// _runtime/metro/05891__.js
import _mod545 from "00545__.js";
import object from "../05892_object.js";
import _mod5893 from "05893__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5893(arg0));
    }
    return {};
  }
}
