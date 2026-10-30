// === Module 998: ? ===

// Module 998
import _mod681 from "module_681" /* 681 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;
import noop from "module_19" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  _mod681.applySdkMetadata(obj, "react");
  feedbackAsyncIntegration.setContext("react", { version: noop.version });
  const obj4 = { version: noop.version };
  return feedbackAsyncIntegration.init(obj);
}