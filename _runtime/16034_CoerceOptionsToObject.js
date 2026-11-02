// _runtime/16034_CoerceOptionsToObject.js
import _mod16035 from "metro/16035__.js";

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
