// _runtime/00891_DEFAULT_BREADCRUMB_LEVEL.js
import _mod693 from "metro/00693__.js";

export const DEFAULT_BREADCRUMB_LEVEL = "info";
export const breadcrumbFromObject = function breadcrumbFromObject(type) {
  const obj = {};
  if (typeof type.type === "string") {
    obj.type = type.type;
  }
  if (typeof type.level === "string") {
    const obj2 = _mod693;
    obj.level = obj2.severityLevelFromString(type.level);
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
