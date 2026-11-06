// === Module 13265: generatePropagationContext ===

// Module 13265 (generatePropagationContext)
import _mod13266 from "module_13266" /* 13266 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod13266.uuid4(), spanId: null };
  obj.spanId = _mod13266.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod13266.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod13266.uuid4();
}