// === Module 15276: CoerceOptionsToObject ===

// Module 15276 (CoerceOptionsToObject)
import _mod15277 from "module_15277" /* 15277 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15277.ToObject(arg0);
  }
};