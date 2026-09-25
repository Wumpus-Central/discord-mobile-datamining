// === Module 13739: CoerceOptionsToObject ===

// Module 13739 (CoerceOptionsToObject)
import _mod13740 from "module_13740" /* 13740 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13740.ToObject(arg0);
  }
};