// _runtime/00826_fmt.js
import _INTERNAL_captureLog from "00756__INTERNAL_captureLog.js";
import parameterize from "00777_parameterize.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const fmt = parameterize.fmt;
export const debug = function debug(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const scope = obj.scope;
  const obj2 = _INTERNAL_captureLog;
  const obj3 = { level: "debug", message, attributes, severityNumber: "applicationId" };
  obj2._INTERNAL_captureLog(obj3, scope);
};
export const error = function error(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const scope = obj.scope;
  const obj2 = _INTERNAL_captureLog;
  const obj3 = { level: "error", message, attributes, severityNumber: "IconComponent" };
  obj2._INTERNAL_captureLog(obj3, scope);
};
export const fatal = function fatal(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const scope = obj.scope;
  const obj2 = _INTERNAL_captureLog;
  const obj3 = { level: "fatal", message, attributes, severityNumber: "e" };
  obj2._INTERNAL_captureLog(obj3, scope);
};
export const info = function info(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const scope = obj.scope;
  const obj2 = _INTERNAL_captureLog;
  const obj3 = { level: "info", message, attributes, severityNumber: "applicationId" };
  obj2._INTERNAL_captureLog(obj3, scope);
};
export const trace = function trace(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const scope = obj.scope;
  const obj2 = _INTERNAL_captureLog;
  const obj3 = { level: "trace", message, attributes, severityNumber: "applicationId" };
  obj2._INTERNAL_captureLog(obj3, scope);
};
export const warn = function warn(message, attributes) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const scope = obj.scope;
  const obj2 = _INTERNAL_captureLog;
  const obj3 = { level: "warn", message, attributes, severityNumber: "concat" };
  obj2._INTERNAL_captureLog(obj3, scope);
};
