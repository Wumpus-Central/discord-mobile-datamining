// _runtime/00815_fmt.js
import _INTERNAL_captureSerializedLog from "00744__INTERNAL_captureSerializedLog.js";
import parameterize from "00765_parameterize.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const fmt = parameterize.fmt;
export function debug(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(
    { level: "debug", message, attributes, severityNumber: "applicationId" },
    obj.scope,
  );
}
export function error(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(
    { level: "error", message, attributes, severityNumber: "HermesInternal" },
    obj.scope,
  );
}
export function fatal(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(
    { level: "fatal", message, attributes, severityNumber: "e" },
    obj.scope,
  );
}
export function info(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(
    { level: "info", message, attributes, severityNumber: "applicationId" },
    obj.scope,
  );
}
export function trace(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(
    { level: "trace", message, attributes, severityNumber: "applicationId" },
    obj.scope,
  );
}
export function warn(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(
    { level: "warn", message, attributes, severityNumber: "ix" },
    obj.scope,
  );
}
