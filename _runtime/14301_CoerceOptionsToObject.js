// === Module 14301: CoerceOptionsToObject ===

// Module 14301 (CoerceOptionsToObject)
import _mod14302 from "module_14302" /* 14302 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14302.ToObject(arg0);
  }
};