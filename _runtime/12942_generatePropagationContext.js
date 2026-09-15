// _runtime/12942_generatePropagationContext.js
import _mod12943 from "metro/12943__.js";

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12943.uuid4(), spanId: null };
  obj.spanId = _mod12943.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12943.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12943.uuid4();
};
