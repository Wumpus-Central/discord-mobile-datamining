// === Module 1012: ? ===

// Module 1012
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import noop from "module_19" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  _mod693.applySdkMetadata(obj, "react");
  feedbackAsyncIntegration.setContext("react", { version: noop.version });
  const obj4 = { version: noop.version };
  return feedbackAsyncIntegration.init(obj);
};