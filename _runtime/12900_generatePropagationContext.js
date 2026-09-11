// === Module 12900: generatePropagationContext ===

// Module 12900 (generatePropagationContext)
import _mod12901 from "module_12901" /* 12901 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12901.uuid4(), spanId: null };
  obj.spanId = _mod12901.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12901.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12901.uuid4();
};