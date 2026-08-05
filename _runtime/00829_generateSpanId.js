import { addContextToFrame } from "00830_addContextToFrame.js";
// _runtime/00829_generateSpanId.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.generateSpanId = function generateSpanId() {
  const obj = addContextToFrame /* addContextToFrame */;
  return addContextToFrame /* addContextToFrame */.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return addContextToFrame /* addContextToFrame */.uuid4();
};