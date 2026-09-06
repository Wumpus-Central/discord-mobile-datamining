// === Module 12807: generatePropagationContext ===

// Module 12807 (generatePropagationContext)
import _mod12808 from "module_12808" /* 12808 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12808.uuid4(), spanId: null };
  obj.spanId = _mod12808.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12808.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12808.uuid4();
};