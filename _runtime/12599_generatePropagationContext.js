// === Module 12599: generatePropagationContext ===

// Module 12599 (generatePropagationContext)
import _mod12600 from "module_12600" /* 12600 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12600.uuid4(), spanId: null };
  obj.spanId = _mod12600.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12600.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12600.uuid4();
};