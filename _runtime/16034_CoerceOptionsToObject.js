// === Module 16034: CoerceOptionsToObject ===

// Module 16034 (CoerceOptionsToObject)
import _mod16035 from "module_16035" /* 16035 */;

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16035.ToObject(arg0);
  }
}