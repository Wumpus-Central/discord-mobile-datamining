// === Module 12958: generatePropagationContext ===

// Module 12958 (generatePropagationContext)
import _mod12959 from "module_12959" /* 12959 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12959.uuid4(), spanId: null };
  obj.spanId = _mod12959.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12959.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12959.uuid4();
};