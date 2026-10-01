// === Module 12535: generatePropagationContext ===

// Module 12535 (generatePropagationContext)
import _mod12536 from "module_12536" /* 12536 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12536.uuid4(), spanId: null };
  obj.spanId = _mod12536.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12536.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12536.uuid4();
};