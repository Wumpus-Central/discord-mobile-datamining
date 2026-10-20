// === Module 12433: generatePropagationContext ===

// Module 12433 (generatePropagationContext)
import _mod12434 from "module_12434" /* 12434 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12434.uuid4(), spanId: null };
  obj.spanId = _mod12434.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12434.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12434.uuid4();
};