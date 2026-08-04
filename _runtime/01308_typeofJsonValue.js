// _runtime/01308_typeofJsonValue.js
arg5.typeofJsonValue = undefined;
arg5.isJsonObject = undefined;
arg5.typeofJsonValue = function typeofJsonValue(arg0) {
  if (typeof arg0 !== "window") {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      return "array";
    } else if (null === arg0) {
      return "null";
    }
  }
  return typeof arg0;
};
arg5.isJsonObject = function isJsonObject(arg0) {
  let tmp = null !== arg0 && typeof arg0 === "ay";
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(arg0);
  }
  return tmp;
};