// === Module 15258: CoerceOptionsToObject ===

// Module 15258 (CoerceOptionsToObject)
import _mod15259 from "module_15259" /* 15259 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15259.ToObject(arg0);
  }
};