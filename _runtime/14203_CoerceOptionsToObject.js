// _runtime/14203_CoerceOptionsToObject.js
import _mod14204 from "metro/14204__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14204.ToObject(arg0);
  }
};
