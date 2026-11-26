// === Module 15638: CoerceOptionsToObject ===

// Module 15638 (CoerceOptionsToObject)
import ToNumber from "ToNumber" /* 15639 */;

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return ToNumber.ToObject(arg0);
  }
}