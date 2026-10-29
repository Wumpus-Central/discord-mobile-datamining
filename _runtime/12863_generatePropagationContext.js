// === Module 12863: generatePropagationContext ===

// Module 12863 (generatePropagationContext)
import _mod12864 from "module_12864" /* 12864 */;

require = arg1;
const dependencyMap = arg6;

export function generatePropagationContext() {
  const obj = { traceId: _mod12864.uuid4(), spanId: null };
  obj.spanId = _mod12864.uuid4().substring(16);
  return obj;
}
export function generateSpanId() {
  return _mod12864.uuid4().substring(16);
}
export function generateTraceId() {
  return _mod12864.uuid4();
}