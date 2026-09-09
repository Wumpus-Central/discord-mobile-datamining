// _runtime/00815_fmt.js
import _INTERNAL_captureSerializedLog from "00745__INTERNAL_captureSerializedLog.js";
import parameterize from "00766_parameterize.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const fmt = parameterize.fmt;
export const debug = function debug(message, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "debug", message, attributes, severityNumber: "accessible" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const error = function error(message, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "error", message, attributes, severityNumber: "HermesInternal" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const fatal = function fatal(message, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "fatal", message, attributes, severityNumber: "e" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const info = function info(message, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "info", message, attributes, severityNumber: "accessible" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const trace = function trace(message, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "trace", message, attributes, severityNumber: "accessible" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const warn = function warn(message, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "warn", message, attributes, severityNumber: "id" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
