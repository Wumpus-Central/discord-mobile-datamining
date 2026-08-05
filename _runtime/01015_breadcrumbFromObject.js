// _runtime/01015_breadcrumbFromObject.js
const require = arg1;
const dependencyMap = arg6;
arg5.DEFAULT_BREADCRUMB_LEVEL = "info";
arg5.breadcrumbFromObject = function breadcrumbFromObject(type) {
  const obj = {};
  if (typeof type.type === "string") {
    obj.type = type.type;
  }
  if (typeof type.level === "string") {
    obj.level = require(817) /* registerSpanErrorInstrumentation */.severityLevelFromString(type.level);
    const obj2 = require(817) /* registerSpanErrorInstrumentation */;
  }
  if (typeof type.event_id === "string") {
    obj.event_id = type.event_id;
  }
  if (typeof type.category === "string") {
    obj.category = type.category;
  }
  if (typeof type.message === "string") {
    obj.message = type.message;
  }
  const data = type.data;
  let tmp = typeof data === "object";
  if (typeof data === "object") {
    tmp = null !== type.data;
  }
  if (tmp) {
    obj.data = type.data;
  }
  if (typeof type.timestamp === "string") {
    const _Date = Date;
    const result = Date.parse(type.timestamp) / 1000;
    const _isNaN = isNaN;
    if (!isNaN(result)) {
      obj.timestamp = result;
    }
  }
  return obj;
};