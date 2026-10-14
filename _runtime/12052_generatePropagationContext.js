// === Module 12052: generatePropagationContext ===

// Module 12052 (generatePropagationContext)
import _mod12053 from "module_12053" /* 12053 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12053.uuid4(), spanId: null };
  obj.spanId = _mod12053.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12053.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12053.uuid4();
};