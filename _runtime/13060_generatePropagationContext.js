// === Module 13060: generatePropagationContext ===

// Module 13060 (generatePropagationContext)
import _mod13061 from "module_13061" /* 13061 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13061.uuid4(), spanId: null };
  obj.spanId = _mod13061.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13061.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13061.uuid4();
};