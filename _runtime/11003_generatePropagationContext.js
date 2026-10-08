// === Module 11003: generatePropagationContext ===

// Module 11003 (generatePropagationContext)
import _mod11004 from "module_11004" /* 11004 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod11004.uuid4(), spanId: null };
  obj.spanId = _mod11004.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod11004.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod11004.uuid4();
};