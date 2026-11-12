// === Module 9740: generatePropagationContext ===

// Module 9740 (generatePropagationContext)
import _mod9741 from "module_9741" /* 9741 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod9741.uuid4(), spanId: null };
  obj.spanId = _mod9741.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod9741.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod9741.uuid4();
}