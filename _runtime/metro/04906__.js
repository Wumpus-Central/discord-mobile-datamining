// _runtime/metro/04906__.js
import _mod545 from "00545__.js";
import object from "../04907_object.js";
import _mod4908 from "04908__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4908(arg0));
    }
    return {};
  }
}
