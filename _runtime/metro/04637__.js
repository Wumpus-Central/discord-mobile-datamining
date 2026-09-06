// _runtime/metro/04637__.js
import _mod545 from "00545__.js";
import object from "../04638_object.js";
import _mod4639 from "04639__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4639(arg0));
    }
    return {};
  }
}
