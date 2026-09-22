// _runtime/14489_CoerceOptionsToObject.js
import _mod14490 from "metro/14490__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14490.ToObject(arg0);
  }
};
