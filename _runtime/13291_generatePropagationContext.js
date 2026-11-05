// _runtime/13291_generatePropagationContext.js
import _mod13292 from "metro/13292__.js";

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod13292.uuid4(), spanId: null };
  obj.spanId = _mod13292.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod13292.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod13292.uuid4();
}
