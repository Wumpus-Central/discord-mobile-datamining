// _runtime/15276_CoerceOptionsToObject.js
import _mod15277 from "metro/15277__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15277.ToObject(arg0);
  }
};
