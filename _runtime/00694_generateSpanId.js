// === Module 694: generateSpanId ===

// Module 694 (generateSpanId)
import uuid4 from "uuid4" /* 695 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const generateSpanId = function generateSpanId() {
  return uuid4.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return uuid4.uuid4();
};