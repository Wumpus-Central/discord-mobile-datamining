// _runtime/metro/01012__.js
import _mod693 from "00693__.js";
import feedbackAsyncIntegration from "../00900_feedbackAsyncIntegration.js";
import noop from "00019__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  _mod693.applySdkMetadata(obj, "react");
  feedbackAsyncIntegration.setContext("react", { version: noop.version });
  const obj4 = { version: noop.version };
  return feedbackAsyncIntegration.init(obj);
};
