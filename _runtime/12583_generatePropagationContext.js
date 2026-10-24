// === Module 12583: generatePropagationContext ===

// Module 12583 (generatePropagationContext)
import _mod12584 from "module_12584" /* 12584 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12584.uuid4(), spanId: null };
  obj.spanId = _mod12584.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12584.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12584.uuid4();
};