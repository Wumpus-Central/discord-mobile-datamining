// _runtime/00694_generateSpanId.js
import uuid4 from "00695_uuid4.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const generateSpanId = function generateSpanId() {
  return uuid4.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return uuid4.uuid4();
};
