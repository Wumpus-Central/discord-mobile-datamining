// === Module 13291: generatePropagationContext ===

// Module 13291 (generatePropagationContext)
import _mod13292 from "module_13292" /* 13292 */;

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