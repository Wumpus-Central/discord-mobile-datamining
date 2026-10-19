// === Module 15230: CoerceOptionsToObject ===

// Module 15230 (CoerceOptionsToObject)
import _mod15231 from "module_15231" /* 15231 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15231.ToObject(arg0);
  }
};