// === Module 13695: CoerceOptionsToObject ===

// Module 13695 (CoerceOptionsToObject)
import _mod13696 from "module_13696" /* 13696 */;

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13696.ToObject(arg0);
  }
};