// === Module 11218: generatePropagationContext ===

// Module 11218 (generatePropagationContext)
import _mod11219 from "module_11219" /* 11219 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod11219.uuid4(), spanId: null };
  obj.spanId = _mod11219.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod11219.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod11219.uuid4();
};