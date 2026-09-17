// _runtime/metro/04717__.js
import _mod545 from "00545__.js";
import object from "../04718_object.js";
import _mod4719 from "04719__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4719(arg0));
    }
    return {};
  }
}
