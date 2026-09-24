// === Module 14578: CoerceOptionsToObject ===

// Module 14578 (CoerceOptionsToObject)
import _mod14579 from "module_14579" /* 14579 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14579.ToObject(arg0);
  }
};