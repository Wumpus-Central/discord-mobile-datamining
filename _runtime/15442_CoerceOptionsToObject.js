// === Module 15442: CoerceOptionsToObject ===

// Module 15442 (CoerceOptionsToObject)
import ToNumber from "ToNumber" /* 15443 */;

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