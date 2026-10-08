// === Module 14284: CoerceOptionsToObject ===

// Module 14284 (CoerceOptionsToObject)
import _mod14285 from "module_14285" /* 14285 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14285.ToObject(arg0);
  }
};