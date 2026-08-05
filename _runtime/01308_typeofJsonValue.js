// _runtime/01308_typeofJsonValue.js
arg5.typeofJsonValue = undefined;
arg5.isJsonObject = undefined;
arg5.typeofJsonValue = function typeofJsonValue(obj) {
  if (typeof obj === "object") {
    const _Array = Array;
    if (Array.isArray(obj)) {
      return "array";
    } else if (null === obj) {
      return "null";
    }
  }
  return typeof obj;
};
arg5.isJsonObject = function isJsonObject(obj) {
  let tmp = null !== obj && typeof obj === "object";
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  return tmp;
};