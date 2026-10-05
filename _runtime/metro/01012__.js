// _runtime/metro/01012__.js
import _mod693 from "00693__.js";
import feedbackAsyncIntegration from "../00900_feedbackAsyncIntegration.js";
import react from "../00019_react.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const obj2 = _mod693;
  obj2.applySdkMetadata(obj, "react");
  const obj3 = feedbackAsyncIntegration;
  const obj4 = { version: react.version };
  obj3.setContext("react", obj4);
  const obj5 = feedbackAsyncIntegration;
  return obj5.init(obj);
};
