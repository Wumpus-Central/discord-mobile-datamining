// === Module 1010: ? ===

// Module 1010
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;
import noop from "module_19" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  _mod693.applySdkMetadata(obj, "react");
  feedbackAsyncIntegration.setContext("react", { version: noop.version });
  const obj4 = { version: noop.version };
  return feedbackAsyncIntegration.init(obj);
}