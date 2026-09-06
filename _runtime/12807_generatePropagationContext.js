// === Module 12807: generatePropagationContext ===

// Module 12807 (generatePropagationContext)
import addContextToFrame from "addContextToFrame" /* 12808 */;

require = arg1;
const dependencyMap = arg6;
arg5.generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: addContextToFrame.uuid4(), spanId: null };
  const obj2 = addContextToFrame;
  const obj3 = addContextToFrame;
  obj[1] = addContextToFrame.uuid4().substring(16);
  return obj;
};
arg5.generateSpanId = function generateSpanId() {
  const obj = addContextToFrame;
  return addContextToFrame.uuid4().substring(16);
};
arg5.generateTraceId = function generateTraceId() {
  return addContextToFrame.uuid4();
};