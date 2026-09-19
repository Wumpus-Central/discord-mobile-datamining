// _runtime/14477_CoerceOptionsToObject.js
import _mod14478 from "metro/14478__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14478.ToObject(arg0);
  }
};
