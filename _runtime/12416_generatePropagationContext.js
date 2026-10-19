// === Module 12416: generatePropagationContext ===

// Module 12416 (generatePropagationContext)
import _mod12417 from "module_12417" /* 12417 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12417.uuid4(), spanId: null };
  obj.spanId = _mod12417.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12417.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12417.uuid4();
};