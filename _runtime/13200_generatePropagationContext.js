// === Module 13200: generatePropagationContext ===

// Module 13200 (generatePropagationContext)
import _mod13201 from "module_13201" /* 13201 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod13201.uuid4(), spanId: null };
  obj.spanId = _mod13201.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod13201.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod13201.uuid4();
}