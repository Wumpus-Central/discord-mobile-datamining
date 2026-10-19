// === Module 12396: generatePropagationContext ===

// Module 12396 (generatePropagationContext)
import _mod12397 from "module_12397" /* 12397 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12397.uuid4(), spanId: null };
  obj.spanId = _mod12397.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12397.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12397.uuid4();
};