// _runtime/15357_CoerceOptionsToObject.js
import ToNumber from "15358_ToNumber.js";

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
