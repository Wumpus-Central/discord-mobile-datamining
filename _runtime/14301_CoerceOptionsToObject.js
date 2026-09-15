// _runtime/14301_CoerceOptionsToObject.js
import _mod14302 from "metro/14302__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14302.ToObject(arg0);
  }
};
