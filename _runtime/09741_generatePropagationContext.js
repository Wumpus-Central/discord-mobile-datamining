// === Module 9741: generatePropagationContext ===

// Module 9741 (generatePropagationContext)
import _mod9742 from "module_9742" /* 9742 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod9742.uuid4(), spanId: null };
  obj.spanId = _mod9742.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod9742.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod9742.uuid4();
}