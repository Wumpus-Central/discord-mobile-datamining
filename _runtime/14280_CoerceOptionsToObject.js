// _runtime/14280_CoerceOptionsToObject.js
import _mod14281 from "metro/14281__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14281.ToObject(arg0);
  }
};
