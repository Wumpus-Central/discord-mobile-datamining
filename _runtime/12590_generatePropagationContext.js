// === Module 12590: generatePropagationContext ===

// Module 12590 (generatePropagationContext)
import _mod12591 from "module_12591" /* 12591 */;


export const generatePropagationContext = function generatePropagationContext() {
  let obj2;
  let str;
  const obj = { traceId: obj2.uuid4(), spanId: str.substring(16) };
  obj2 = _mod12591;
  const obj3 = _mod12591;
  str = obj3.uuid4();
  return obj;
};
export const generateSpanId = function generateSpanId() {
  const obj = _mod12591;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = _mod12591;
  return obj.uuid4();
};