// _runtime/16279_CoerceOptionsToObject.js
import _mod16280 from "metro/16280__.js";

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16280.ToObject(arg0);
  }
}
