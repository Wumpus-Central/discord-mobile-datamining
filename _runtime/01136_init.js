// === Module 1136: init ===

// Module 1136 (init)
import noop from "noop";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  require(817) /* registerSpanErrorInstrumentation */.applySdkMetadata(obj, "react");
  const obj2 = require(817) /* registerSpanErrorInstrumentation */;
  obj = { version: noop.version };
  require(1024) /* feedbackAsyncIntegration */.setContext("react", obj);
  const obj3 = require(1024) /* feedbackAsyncIntegration */;
  return require(1024) /* feedbackAsyncIntegration */.init(obj);
};