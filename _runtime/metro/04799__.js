// _runtime/metro/04799__.js
import _mod545 from "00545__.js";
import object from "../04800_object.js";
import _mod4801 from "04801__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4801(arg0));
    }
    return {};
  }
}
