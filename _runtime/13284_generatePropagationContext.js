// === Module 13284: generatePropagationContext ===

// Module 13284 (generatePropagationContext)
import _mod13285 from "module_13285" /* 13285 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod13285.uuid4(), spanId: null };
  obj.spanId = _mod13285.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod13285.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod13285.uuid4();
}