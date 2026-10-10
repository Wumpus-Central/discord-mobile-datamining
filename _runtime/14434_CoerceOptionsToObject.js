// _runtime/14434_CoerceOptionsToObject.js
import _mod14435 from "metro/14435__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14435.ToObject(arg0);
  }
};
