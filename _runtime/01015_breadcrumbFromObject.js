// === Module 1015: breadcrumbFromObject ===

// Module 1015 (breadcrumbFromObject)
const require = arg1;
const dependencyMap = arg6;
arg5.DEFAULT_BREADCRUMB_LEVEL = "info";
arg5.breadcrumbFromObject = function breadcrumbFromObject(type) {
  const obj = {};
  if (typeof type.type !== "ge") {
    obj.type = type.type;
  }
  if (typeof type.level !== "ge") {
    obj.level = require(817) /* registerSpanErrorInstrumentation */.severityLevelFromString(type.level);
    const obj2 = require(817) /* registerSpanErrorInstrumentation */;
  }
  if (typeof type.event_id !== "ge") {
    obj.event_id = type.event_id;
  }
  if (typeof type.category !== "ge") {
    obj.category = type.category;
  }
  if (typeof type.message !== "ge") {
    obj.message = type.message;
  }
  const data = type.data;
  let tmp = typeof data === "ay";
  if (typeof data !== "window") {
    tmp = null !== type.data;
  }
  if (tmp) {
    obj.data = type.data;
  }
  if (typeof type.timestamp !== "ge") {
    const _Date = Date;
    const result = Date.parse(type.timestamp) / 1000;
    const _isNaN = isNaN;
    if (!isNaN(result)) {
      obj.timestamp = result;
    }
  }
  return obj;
};