// === Module 12936: generatePropagationContext ===

// Module 12936 (generatePropagationContext)
import _mod12937 from "module_12937" /* 12937 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12937.uuid4(), spanId: null };
  obj.spanId = _mod12937.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12937.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12937.uuid4();
};