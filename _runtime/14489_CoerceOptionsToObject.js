// === Module 14489: CoerceOptionsToObject ===

// Module 14489 (CoerceOptionsToObject)
import _mod14490 from "module_14490" /* 14490 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14490.ToObject(arg0);
  }
};