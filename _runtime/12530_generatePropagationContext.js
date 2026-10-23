// === Module 12530: generatePropagationContext ===

// Module 12530 (generatePropagationContext)
import _mod12531 from "module_12531" /* 12531 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12531.uuid4(), spanId: null };
  obj.spanId = _mod12531.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12531.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12531.uuid4();
};