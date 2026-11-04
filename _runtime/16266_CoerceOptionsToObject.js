// _runtime/16266_CoerceOptionsToObject.js
import _mod16267 from "metro/16267__.js";

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16267.ToObject(arg0);
  }
}
