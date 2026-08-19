// === Module 7748: generatePropagationContext ===

// Module 7748 (generatePropagationContext)
import addContextToFrame from "addContextToFrame" /* 7749 */;

require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: addContextToFrame.uuid4(), spanId: null };
  obj[1] = addContextToFrame.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  return addContextToFrame.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return addContextToFrame.uuid4();
};