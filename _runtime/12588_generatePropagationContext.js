// === Module 12588: generatePropagationContext ===

// Module 12588 (generatePropagationContext)
import _mod12589 from "module_12589" /* 12589 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12589.uuid4(), spanId: null };
  obj.spanId = _mod12589.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12589.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12589.uuid4();
};