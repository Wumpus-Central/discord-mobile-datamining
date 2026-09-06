// === Module 1001: ? ===

// Module 1001
import _mod682 from "module_682" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;
import noop from "module_19" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  _mod682.applySdkMetadata(obj, "react");
  obj = { version: noop.version };
  feedbackAsyncIntegration.setContext("react", obj);
  return feedbackAsyncIntegration.init(obj);
};