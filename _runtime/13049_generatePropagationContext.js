// === Module 13049: generatePropagationContext ===

// Module 13049 (generatePropagationContext)
import _mod13050 from "module_13050" /* 13050 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13050.uuid4(), spanId: null };
  obj.spanId = _mod13050.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13050.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13050.uuid4();
};