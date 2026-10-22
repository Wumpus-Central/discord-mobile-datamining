// _runtime/12519_generatePropagationContext.js
import _mod12520 from "metro/12520__.js";

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12520.uuid4(), spanId: null };
  obj.spanId = _mod12520.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12520.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12520.uuid4();
};
