// === Module 9807: generatePropagationContext ===

// Module 9807 (generatePropagationContext)
import _mod9808 from "module_9808" /* 9808 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod9808.uuid4(), spanId: null };
  obj.spanId = _mod9808.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod9808.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod9808.uuid4();
}