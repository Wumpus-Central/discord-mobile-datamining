// === Module 14231: CoerceOptionsToObject ===

// Module 14231 (CoerceOptionsToObject)
import _mod14232 from "module_14232" /* 14232 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14232.ToObject(arg0);
  }
};