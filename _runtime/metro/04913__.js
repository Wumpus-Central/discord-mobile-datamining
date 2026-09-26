// _runtime/metro/04913__.js
import _mod545 from "00545__.js";
import object from "../04914_object.js";
import _mod4915 from "04915__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4915(arg0));
    }
    return {};
  }
}
