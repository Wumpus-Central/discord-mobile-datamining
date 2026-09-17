// _runtime/14327_CoerceOptionsToObject.js
import _mod14328 from "metro/14328__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14328.ToObject(arg0);
  }
};
