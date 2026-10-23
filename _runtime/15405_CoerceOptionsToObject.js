// _runtime/15405_CoerceOptionsToObject.js
import _mod15406 from "metro/15406__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15406.ToObject(arg0);
  }
};
