// === Module 13694: CoerceOptionsToObject ===

// Module 13694 (CoerceOptionsToObject)
import _mod13695 from "module_13695" /* 13695 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13695.ToObject(arg0);
  }
};