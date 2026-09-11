// _runtime/14256_CoerceOptionsToObject.js
import _mod14257 from "metro/14257__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14257.ToObject(arg0);
  }
};
