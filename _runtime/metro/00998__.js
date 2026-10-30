// _runtime/metro/00998__.js
import _mod681 from "00681__.js";
import feedbackAsyncIntegration from "../00886_feedbackAsyncIntegration.js";
import noop from "00019__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  _mod681.applySdkMetadata(obj, "react");
  feedbackAsyncIntegration.setContext("react", { version: noop.version });
  const obj4 = { version: noop.version };
  return feedbackAsyncIntegration.init(obj);
}
