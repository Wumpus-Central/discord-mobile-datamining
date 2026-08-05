// _runtime/01136_init.js
import noop from "noop";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.applySdkMetadata(obj, "react");
  const obj2 = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
  obj = { version: noop.version };
  require("01024_feedbackAsyncIntegration.js") /* feedbackAsyncIntegration */.setContext("react", obj);
  const obj3 = require("01024_feedbackAsyncIntegration.js") /* feedbackAsyncIntegration */;
  return require("01024_feedbackAsyncIntegration.js") /* feedbackAsyncIntegration */.init(obj);
};