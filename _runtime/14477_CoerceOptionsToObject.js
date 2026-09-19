// === Module 14477: CoerceOptionsToObject ===

// Module 14477 (CoerceOptionsToObject)
import _mod14478 from "module_14478" /* 14478 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14478.ToObject(arg0);
  }
};