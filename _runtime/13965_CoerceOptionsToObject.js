// === Module 13965: CoerceOptionsToObject ===

// Module 13965 (CoerceOptionsToObject)
import _mod13966 from "module_13966" /* 13966 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13966.ToObject(arg0);
  }
};