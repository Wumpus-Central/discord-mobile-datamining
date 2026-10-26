// === Module 15451: CoerceOptionsToObject ===

// Module 15451 (CoerceOptionsToObject)
import _mod15452 from "module_15452" /* 15452 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15452.ToObject(arg0);
  }
};