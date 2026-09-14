// _runtime/14292_CoerceOptionsToObject.js
import _mod14293 from "metro/14293__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14293.ToObject(arg0);
  }
};
