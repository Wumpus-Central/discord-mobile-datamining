// === Module 12494: generatePropagationContext ===

// Module 12494 (generatePropagationContext)
import _mod12495 from "module_12495" /* 12495 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12495.uuid4(), spanId: null };
  obj.spanId = _mod12495.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12495.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12495.uuid4();
};