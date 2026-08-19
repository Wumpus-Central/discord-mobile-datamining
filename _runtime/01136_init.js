// === Module 1136: init ===

// Module 1136 (init)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1024 */;
import noop from "noop" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  registerSpanErrorInstrumentation.applySdkMetadata(obj, "react");
  obj = { version: noop.version };
  feedbackAsyncIntegration.setContext("react", obj);
  return feedbackAsyncIntegration.init(obj);
};