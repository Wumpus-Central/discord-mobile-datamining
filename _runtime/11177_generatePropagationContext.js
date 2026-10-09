// _runtime/11177_generatePropagationContext.js
import _mod11178 from "metro/11178__.js";

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod11178.uuid4(), spanId: null };
  obj.spanId = _mod11178.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod11178.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod11178.uuid4();
};
