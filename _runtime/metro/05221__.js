// _runtime/metro/05221__.js
import _mod545 from "00545__.js";
import object from "../05222_object.js";
import _mod5223 from "05223__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5223(arg0));
    }
    return {};
  }
}
