// === Module 16177: CoerceOptionsToObject ===

// Module 16177 (CoerceOptionsToObject)
import _mod16178 from "module_16178" /* 16178 */;

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16178.ToObject(arg0);
  }
}