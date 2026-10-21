// === Module 12489: generatePropagationContext ===

// Module 12489 (generatePropagationContext)
import _mod12490 from "module_12490" /* 12490 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12490.uuid4(), spanId: null };
  obj.spanId = _mod12490.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12490.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12490.uuid4();
};