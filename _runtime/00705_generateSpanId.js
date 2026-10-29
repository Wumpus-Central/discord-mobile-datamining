// _runtime/00705_generateSpanId.js
import uuid4 from "00706_uuid4.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function generateSpanId() {
  return uuid4.uuid4().substring(16);
}
export function generateTraceId() {
  return uuid4.uuid4();
}
