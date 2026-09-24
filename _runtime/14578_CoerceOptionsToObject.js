// _runtime/14578_CoerceOptionsToObject.js
import _mod14579 from "metro/14579__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14579.ToObject(arg0);
  }
};
