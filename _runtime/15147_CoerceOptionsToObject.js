// === Module 15147: CoerceOptionsToObject ===

// Module 15147 (CoerceOptionsToObject)
import _mod15148 from "module_15148" /* 15148 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15148.ToObject(arg0);
  }
};