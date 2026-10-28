// === Module 15713: CoerceOptionsToObject ===

// Module 15713 (CoerceOptionsToObject)
import _mod15714 from "module_15714" /* 15714 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15714.ToObject(arg0);
  }
};