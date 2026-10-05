// === Module 1012: ? ===

// Module 1012
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import react from "react" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const obj2 = _mod693;
  obj2.applySdkMetadata(obj, "react");
  const obj3 = feedbackAsyncIntegration;
  const obj4 = { version: react.version };
  obj3.setContext("react", obj4);
  const obj5 = feedbackAsyncIntegration;
  return obj5.init(obj);
};