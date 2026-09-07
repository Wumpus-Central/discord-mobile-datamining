// === Module 14206: CoerceOptionsToObject ===

// Module 14206 (CoerceOptionsToObject)
import _mod14207 from "module_14207" /* 14207 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14207.ToObject(arg0);
  }
};