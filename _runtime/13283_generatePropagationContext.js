// === Module 13283: generatePropagationContext ===

// Module 13283 (generatePropagationContext)
import _mod13284 from "module_13284" /* 13284 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod13284.uuid4(), spanId: null };
  obj.spanId = _mod13284.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod13284.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod13284.uuid4();
}