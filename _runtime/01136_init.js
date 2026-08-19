// _runtime/01136_init.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import feedbackAsyncIntegration from "01024_feedbackAsyncIntegration.js";
import noop from "00019_noop.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  registerSpanErrorInstrumentation.applySdkMetadata(obj, "react");
  obj = { version: noop.version };
  feedbackAsyncIntegration.setContext("react", obj);
  return feedbackAsyncIntegration.init(obj);
};