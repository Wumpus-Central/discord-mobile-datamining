// _runtime/14231_CoerceOptionsToObject.js
import _mod14232 from "metro/14232__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14232.ToObject(arg0);
  }
};
