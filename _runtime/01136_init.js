// _runtime/01136_init.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import feedbackAsyncIntegration from "01024_feedbackAsyncIntegration.js";
import closure_2 from "00019_noop.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  registerSpanErrorInstrumentation.applySdkMetadata(obj, "react");
  const obj2 = registerSpanErrorInstrumentation;
  obj = { version: version.version };
  feedbackAsyncIntegration.setContext("react", obj);
  const obj3 = feedbackAsyncIntegration;
  return feedbackAsyncIntegration.init(obj);
};
