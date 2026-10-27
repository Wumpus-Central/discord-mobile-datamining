// _runtime/15487_CoerceOptionsToObject.js
import _mod15488 from "metro/15488__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15488.ToObject(arg0);
  }
};
