// === Module 12524: generatePropagationContext ===

// Module 12524 (generatePropagationContext)
import _mod12525 from "module_12525" /* 12525 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12525.uuid4(), spanId: null };
  obj.spanId = _mod12525.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12525.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12525.uuid4();
};