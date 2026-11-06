// _runtime/metro/05968__.js
import _mod545 from "00545__.js";
import object from "../05969_object.js";
import _mod5970 from "05970__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5970(arg0));
    }
    return {};
  }
}
