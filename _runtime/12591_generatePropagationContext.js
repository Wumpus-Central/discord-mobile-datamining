// === Module 12591: generatePropagationContext ===

// Module 12591 (generatePropagationContext)
import _mod12592 from "module_12592" /* 12592 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12592.uuid4(), spanId: null };
  obj.spanId = _mod12592.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12592.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12592.uuid4();
};