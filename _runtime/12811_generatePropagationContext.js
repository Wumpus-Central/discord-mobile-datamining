// === Module 12811: generatePropagationContext ===

// Module 12811 (generatePropagationContext)
import _mod12812 from "module_12812" /* 12812 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12812.uuid4(), spanId: null };
  obj.spanId = _mod12812.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12812.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12812.uuid4();
};