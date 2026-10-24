// === Module 15446: CoerceOptionsToObject ===

// Module 15446 (CoerceOptionsToObject)
import _mod15447 from "module_15447" /* 15447 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15447.ToObject(arg0);
  }
};