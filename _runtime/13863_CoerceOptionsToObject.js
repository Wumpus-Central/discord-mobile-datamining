// === Module 13863: CoerceOptionsToObject ===

// Module 13863 (CoerceOptionsToObject)
import _mod13864 from "module_13864" /* 13864 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13864.ToObject(arg0);
  }
};