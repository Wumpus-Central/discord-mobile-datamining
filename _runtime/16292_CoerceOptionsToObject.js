// _runtime/16292_CoerceOptionsToObject.js
import _mod16293 from "metro/16293__.js";

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16293.ToObject(arg0);
  }
}
