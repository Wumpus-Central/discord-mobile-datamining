// === Module 12285: generatePropagationContext ===

// Module 12285 (generatePropagationContext)
import _mod12286 from "module_12286" /* 12286 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12286.uuid4(), spanId: null };
  obj.spanId = _mod12286.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12286.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12286.uuid4();
};