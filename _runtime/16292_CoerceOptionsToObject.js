// === Module 16292: CoerceOptionsToObject ===

// Module 16292 (CoerceOptionsToObject)
import _mod16293 from "module_16293" /* 16293 */;

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16293.ToObject(arg0);
  }
}