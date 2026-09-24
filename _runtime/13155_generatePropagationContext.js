// === Module 13155: generatePropagationContext ===

// Module 13155 (generatePropagationContext)
import _mod13156 from "module_13156" /* 13156 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13156.uuid4(), spanId: null };
  obj.spanId = _mod13156.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13156.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13156.uuid4();
};