// === Module 14292: CoerceOptionsToObject ===

// Module 14292 (CoerceOptionsToObject)
import _mod14293 from "module_14293" /* 14293 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14293.ToObject(arg0);
  }
};