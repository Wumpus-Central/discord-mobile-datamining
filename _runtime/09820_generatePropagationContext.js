// _runtime/09820_generatePropagationContext.js
import _mod9821 from "metro/09821__.js";

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod9821.uuid4(), spanId: null };
  obj.spanId = _mod9821.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod9821.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod9821.uuid4();
}
