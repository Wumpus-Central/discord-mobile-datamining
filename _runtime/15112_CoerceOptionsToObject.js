// === Module 15112: CoerceOptionsToObject ===

// Module 15112 (CoerceOptionsToObject)
import _mod15113 from "module_15113" /* 15113 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15113.ToObject(arg0);
  }
};