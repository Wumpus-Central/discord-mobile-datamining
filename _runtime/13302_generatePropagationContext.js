// === Module 13302: generatePropagationContext ===

// Module 13302 (generatePropagationContext)
import _mod13303 from "module_13303" /* 13303 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod13303.uuid4(), spanId: null };
  obj.spanId = _mod13303.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod13303.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod13303.uuid4();
}