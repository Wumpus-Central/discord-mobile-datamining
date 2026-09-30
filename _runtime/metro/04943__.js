// _runtime/metro/04943__.js
import _mod545 from "00545__.js";
import object from "../04944_object.js";
import _mod4945 from "04945__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4945(arg0));
    }
    return {};
  }
}
