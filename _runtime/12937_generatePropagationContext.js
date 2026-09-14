// === Module 12937: generatePropagationContext ===

// Module 12937 (generatePropagationContext)
import _mod12938 from "module_12938" /* 12938 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12938.uuid4(), spanId: null };
  obj.spanId = _mod12938.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12938.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12938.uuid4();
};