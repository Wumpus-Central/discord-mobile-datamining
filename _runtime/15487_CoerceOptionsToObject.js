// === Module 15487: CoerceOptionsToObject ===

// Module 15487 (CoerceOptionsToObject)
import _mod15488 from "module_15488" /* 15488 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15488.ToObject(arg0);
  }
};