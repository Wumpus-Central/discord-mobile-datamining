// === Module 13288: generatePropagationContext ===

// Module 13288 (generatePropagationContext)
import _mod13289 from "module_13289" /* 13289 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod13289.uuid4(), spanId: null };
  obj.spanId = _mod13289.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod13289.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod13289.uuid4();
}