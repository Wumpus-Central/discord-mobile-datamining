// _runtime/09740_generatePropagationContext.js
import _mod9741 from "metro/09741__.js";

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
