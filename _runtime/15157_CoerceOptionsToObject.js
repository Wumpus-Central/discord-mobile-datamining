// === Module 15157: CoerceOptionsToObject ===

// Module 15157 (CoerceOptionsToObject)
import _mod15158 from "module_15158" /* 15158 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15158.ToObject(arg0);
  }
};