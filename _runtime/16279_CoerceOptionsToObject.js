// === Module 16279: CoerceOptionsToObject ===

// Module 16279 (CoerceOptionsToObject)
import _mod16280 from "module_16280" /* 16280 */;

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16280.ToObject(arg0);
  }
}