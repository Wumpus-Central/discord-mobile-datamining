// _runtime/metro/04974__.js
import _mod545 from "00545__.js";
import object from "../04975_object.js";
import _mod4976 from "04976__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4976(arg0));
    }
    return {};
  }
}
