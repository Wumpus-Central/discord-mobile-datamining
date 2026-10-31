// _runtime/16030_CoerceOptionsToObject.js
import _mod16031 from "metro/16031__.js";

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
