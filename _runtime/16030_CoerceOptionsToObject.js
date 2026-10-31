// === Module 16030: CoerceOptionsToObject ===

// Module 16030 (CoerceOptionsToObject)
import _mod16031 from "module_16031" /* 16031 */;

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16031.ToObject(arg0);
  }
}