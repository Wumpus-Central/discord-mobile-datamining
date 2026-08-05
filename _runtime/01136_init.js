import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
import { feedbackAsyncIntegration } from "01024_feedbackAsyncIntegration.js";
// _runtime/01136_init.js
import noop from "noop";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.applySdkMetadata(obj, "react");
  const obj2 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  obj = { version: noop.version };
  feedbackAsyncIntegration /* feedbackAsyncIntegration */.setContext("react", obj);
  const obj3 = feedbackAsyncIntegration /* feedbackAsyncIntegration */;
  return feedbackAsyncIntegration /* feedbackAsyncIntegration */.init(obj);
};