// _runtime/00950_fmt.js
import { _INTERNAL_captureSerializedLog } from "00880__INTERNAL_captureSerializedLog.js";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const fmt = require("parameterize").fmt;
export const debug = function debug(message, attributes, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "debug", message, attributes, severityNumber: "HermesInternal" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const error = function error(message, attributes, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "error", message, attributes, severityNumber: "e" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const fatal = function fatal(message, attributes, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "fatal", message, attributes, severityNumber: "accessibilityRole" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const info = function info(message, attributes, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "info", message, attributes, severityNumber: "accessibilityRole" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const trace = function trace(message, attributes, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "trace", message, attributes, severityNumber: "accessibilityRole" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};
export const warn = function warn(message, attributes, attributes) {
  let obj = attributes;
  if (attributes === undefined) {
    obj = {};
  }
  obj = { level: "warn", message, attributes, severityNumber: "id" };
  _INTERNAL_captureSerializedLog._INTERNAL_captureLog(obj, obj.scope);
};