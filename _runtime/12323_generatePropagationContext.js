// === Module 12323: generatePropagationContext ===

// Module 12323 (generatePropagationContext)
import _mod12324 from "module_12324" /* 12324 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12324.uuid4(), spanId: null };
  obj.spanId = _mod12324.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12324.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12324.uuid4();
};