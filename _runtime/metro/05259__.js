// _runtime/metro/05259__.js
import _mod545 from "00545__.js";
import object from "../05260_object.js";
import _mod5261 from "05261__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5261(arg0));
    }
    return {};
  }
}
