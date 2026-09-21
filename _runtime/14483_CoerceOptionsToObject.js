// === Module 14483: CoerceOptionsToObject ===

// Module 14483 (CoerceOptionsToObject)
import _mod14484 from "module_14484" /* 14484 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14484.ToObject(arg0);
  }
};