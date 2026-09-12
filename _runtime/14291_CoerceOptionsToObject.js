// _runtime/14291_CoerceOptionsToObject.js
import _mod14292 from "metro/14292__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14292.ToObject(arg0);
  }
};
