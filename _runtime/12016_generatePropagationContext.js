// === Module 12016: generatePropagationContext ===

// Module 12016 (generatePropagationContext)
import _mod12017 from "module_12017" /* 12017 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12017.uuid4(), spanId: null };
  obj.spanId = _mod12017.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12017.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12017.uuid4();
};