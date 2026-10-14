// _runtime/14816_CoerceOptionsToObject.js
import _mod14817 from "metro/14817__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14817.ToObject(arg0);
  }
};
