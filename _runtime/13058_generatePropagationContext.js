// === Module 13058: generatePropagationContext ===

// Module 13058 (generatePropagationContext)
import _mod13059 from "module_13059" /* 13059 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13059.uuid4(), spanId: null };
  obj.spanId = _mod13059.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13059.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13059.uuid4();
};