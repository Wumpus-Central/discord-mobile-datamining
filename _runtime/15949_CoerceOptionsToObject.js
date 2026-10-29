// === Module 15949: CoerceOptionsToObject ===

// Module 15949 (CoerceOptionsToObject)
import _mod15950 from "module_15950" /* 15950 */;

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15950.ToObject(arg0);
  }
}