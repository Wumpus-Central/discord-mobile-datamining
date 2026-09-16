// === Module 14319: CoerceOptionsToObject ===

// Module 14319 (CoerceOptionsToObject)
import _mod14320 from "module_14320" /* 14320 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14320.ToObject(arg0);
  }
};