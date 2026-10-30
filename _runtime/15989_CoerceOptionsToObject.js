// _runtime/15989_CoerceOptionsToObject.js
import _mod15990 from "metro/15990__.js";

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15990.ToObject(arg0);
  }
}
