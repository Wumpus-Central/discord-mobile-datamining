// === Module 14434: CoerceOptionsToObject ===

// Module 14434 (CoerceOptionsToObject)
import _mod14435 from "module_14435" /* 14435 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14435.ToObject(arg0);
  }
};