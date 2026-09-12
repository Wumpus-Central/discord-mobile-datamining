// === Module 14291: CoerceOptionsToObject ===

// Module 14291 (CoerceOptionsToObject)
import _mod14292 from "module_14292" /* 14292 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14292.ToObject(arg0);
  }
};