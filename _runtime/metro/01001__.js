// _runtime/metro/01001__.js
import _mod682 from "00682__.js";
import feedbackAsyncIntegration from "../00889_feedbackAsyncIntegration.js";
import noop from "00019__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  _mod682.applySdkMetadata(obj, "react");
  feedbackAsyncIntegration.setContext("react", { version: noop.version });
  const obj4 = { version: noop.version };
  return feedbackAsyncIntegration.init(obj);
};
