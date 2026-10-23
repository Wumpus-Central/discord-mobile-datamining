// === Module 12549: generatePropagationContext ===

// Module 12549 (generatePropagationContext)
import _mod12550 from "module_12550" /* 12550 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12550.uuid4(), spanId: null };
  obj.spanId = _mod12550.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12550.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12550.uuid4();
};