// _runtime/metro/04833__.js
import _mod545 from "00545__.js";
import object from "../04834_object.js";
import _mod4835 from "04835__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4835(arg0));
    }
    return {};
  }
}
