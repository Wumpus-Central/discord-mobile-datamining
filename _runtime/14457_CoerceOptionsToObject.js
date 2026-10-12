// === Module 14457: CoerceOptionsToObject ===

// Module 14457 (CoerceOptionsToObject)
import _mod14458 from "module_14458" /* 14458 */;

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