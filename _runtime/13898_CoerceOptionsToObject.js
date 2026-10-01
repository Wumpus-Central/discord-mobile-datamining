// === Module 13898: CoerceOptionsToObject ===

// Module 13898 (CoerceOptionsToObject)
import _mod13899 from "module_13899" /* 13899 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13899.ToObject(arg0);
  }
};