// _runtime/13284_generatePropagationContext.js
import _mod13285 from "metro/13285__.js";

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
