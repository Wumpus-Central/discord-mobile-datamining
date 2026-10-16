// === Module 12314: generatePropagationContext ===

// Module 12314 (generatePropagationContext)
import _mod12315 from "module_12315" /* 12315 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12315.uuid4(), spanId: null };
  obj.spanId = _mod12315.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12315.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12315.uuid4();
};