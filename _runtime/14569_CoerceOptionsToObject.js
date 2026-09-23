// === Module 14569: CoerceOptionsToObject ===

// Module 14569 (CoerceOptionsToObject)
import _mod14570 from "module_14570" /* 14570 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14570.ToObject(arg0);
  }
};