// === Module 14816: CoerceOptionsToObject ===

// Module 14816 (CoerceOptionsToObject)
import _mod14817 from "module_14817" /* 14817 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14817.ToObject(arg0);
  }
};