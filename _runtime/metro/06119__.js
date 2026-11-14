// _runtime/metro/06119__.js
import _mod545 from "00545__.js";
import object from "../06120_object.js";
import _mod6121 from "06121__.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod6121(arg0));
    }
    return {};
  }
}
