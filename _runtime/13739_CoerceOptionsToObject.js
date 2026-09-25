// _runtime/13739_CoerceOptionsToObject.js
import _mod13740 from "metro/13740__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13740.ToObject(arg0);
  }
};
