// _runtime/15392_CoerceOptionsToObject.js
import _mod15393 from "metro/15393__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15393.ToObject(arg0);
  }
};
