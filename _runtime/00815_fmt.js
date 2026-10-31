// === Module 815: fmt ===

// Module 815 (fmt)
import _INTERNAL_captureSerializedLog from "_INTERNAL_captureSerializedLog" /* 744 */;
import parameterize from "parameterize" /* 765 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const fmt = parameterize.fmt;
export function debug(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "debug", message, attributes, severityNumber: "applicationId" }, obj.scope);
}
export function error(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "error", message, attributes, severityNumber: "HermesInternal" }, obj.scope);
}
export function fatal(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "fatal", message, attributes, severityNumber: "e" }, obj.scope);
}
export function info(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "info", message, attributes, severityNumber: "applicationId" }, obj.scope);
}
export function trace(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "trace", message, attributes, severityNumber: "applicationId" }, obj.scope);
}
export function warn(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog({ level: "warn", message, attributes, severityNumber: "code" }, obj.scope);
}