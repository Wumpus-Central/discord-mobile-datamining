// _runtime/metro/04904__.js
import _mod545 from "00545__.js";
import object from "../04905_object.js";
import _mod4906 from "04906__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4906(arg0));
    }
    return {};
  }
}
