// _runtime/metro/05860__.js
import _mod545 from "00545__.js";
import object from "../05861_object.js";
import _mod5862 from "05862__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5862(arg0));
    }
    return {};
  }
}
