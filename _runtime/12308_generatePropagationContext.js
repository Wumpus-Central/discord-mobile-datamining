// === Module 12308: generatePropagationContext ===

// Module 12308 (generatePropagationContext)
import _mod12309 from "module_12309" /* 12309 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12309.uuid4(), spanId: null };
  obj.spanId = _mod12309.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12309.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12309.uuid4();
};