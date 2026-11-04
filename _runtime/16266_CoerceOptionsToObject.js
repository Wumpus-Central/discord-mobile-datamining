// === Module 16266: CoerceOptionsToObject ===

// Module 16266 (CoerceOptionsToObject)
import _mod16267 from "module_16267" /* 16267 */;

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16267.ToObject(arg0);
  }
}