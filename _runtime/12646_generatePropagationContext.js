// === Module 12646: generatePropagationContext ===

// Module 12646 (generatePropagationContext)
import _mod12647 from "module_12647" /* 12647 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12647.uuid4(), spanId: null };
  obj.spanId = _mod12647.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12647.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12647.uuid4();
};