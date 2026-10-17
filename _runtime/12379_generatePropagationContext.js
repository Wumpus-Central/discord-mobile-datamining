// === Module 12379: generatePropagationContext ===

// Module 12379 (generatePropagationContext)
import _mod12380 from "module_12380" /* 12380 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12380.uuid4(), spanId: null };
  obj.spanId = _mod12380.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12380.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12380.uuid4();
};