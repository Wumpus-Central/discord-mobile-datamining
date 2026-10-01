// _runtime/metro/04922__.js
import _mod545 from "00545__.js";
import object from "../04923_object.js";
import _mod4924 from "04924__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4924(arg0));
    }
    return {};
  }
}
