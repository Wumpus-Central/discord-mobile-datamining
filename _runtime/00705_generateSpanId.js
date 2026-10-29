// === Module 705: generateSpanId ===

// Module 705 (generateSpanId)
import uuid4 from "uuid4" /* 706 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function generateSpanId() {
  return uuid4.uuid4().substring(16);
}
export function generateTraceId() {
  return uuid4.uuid4();
}