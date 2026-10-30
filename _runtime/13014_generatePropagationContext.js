// === Module 13014: generatePropagationContext ===

// Module 13014 (generatePropagationContext)
import _mod13015 from "module_13015" /* 13015 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod13015.uuid4(), spanId: null };
  obj.spanId = _mod13015.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod13015.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod13015.uuid4();
}