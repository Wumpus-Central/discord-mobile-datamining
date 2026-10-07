// === Module 12590: generatePropagationContext ===

// Module 12590 (generatePropagationContext)
import _mod12591 from "module_12591" /* 12591 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12591.uuid4(), spanId: null };
  obj.spanId = _mod12591.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12591.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12591.uuid4();
};