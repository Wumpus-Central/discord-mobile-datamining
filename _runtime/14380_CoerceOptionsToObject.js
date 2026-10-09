// _runtime/14380_CoerceOptionsToObject.js
import _mod14381 from "metro/14381__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14381.ToObject(arg0);
  }
};
