// === Module 14256: CoerceOptionsToObject ===

// Module 14256 (CoerceOptionsToObject)
import _mod14257 from "module_14257" /* 14257 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14257.ToObject(arg0);
  }
};