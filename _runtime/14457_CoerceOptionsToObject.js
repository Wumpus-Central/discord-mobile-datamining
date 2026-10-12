// _runtime/14457_CoerceOptionsToObject.js
import _mod14458 from "metro/14458__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14458.ToObject(arg0);
  }
};
