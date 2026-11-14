// === Module 16653: CoerceOptionsToObject ===

// Module 16653 (CoerceOptionsToObject)
import ToNumber from "ToNumber" /* 16654 */;

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