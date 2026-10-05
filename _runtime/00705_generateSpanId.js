// === Module 705: generateSpanId ===

// Module 705 (generateSpanId)
import uuid4 from "uuid4" /* 706 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const generateSpanId = function generateSpanId() {
  const obj = uuid4;
  const str = obj.uuid4();
  return str.substring(16);
};
export const generateTraceId = function generateTraceId() {
  const obj = uuid4;
  return obj.uuid4();
};