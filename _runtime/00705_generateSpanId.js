// _runtime/00705_generateSpanId.js
import uuid4 from "00706_uuid4.js";

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
