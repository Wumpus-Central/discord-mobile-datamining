// === Module 14203: CoerceOptionsToObject ===

// Module 14203 (CoerceOptionsToObject)
import _mod14204 from "module_14204" /* 14204 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14204.ToObject(arg0);
  }
};