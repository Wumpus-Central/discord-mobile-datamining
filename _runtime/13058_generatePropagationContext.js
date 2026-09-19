// _runtime/13058_generatePropagationContext.js
import _mod13059 from "metro/13059__.js";

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod13059.uuid4(), spanId: null };
  obj.spanId = _mod13059.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod13059.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod13059.uuid4();
};
