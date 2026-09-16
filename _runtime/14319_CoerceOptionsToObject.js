// _runtime/14319_CoerceOptionsToObject.js
import _mod14320 from "metro/14320__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14320.ToObject(arg0);
  }
};
