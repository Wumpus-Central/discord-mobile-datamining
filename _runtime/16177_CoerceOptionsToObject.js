// _runtime/16177_CoerceOptionsToObject.js
import _mod16178 from "metro/16178__.js";

require = arg1;
const dependencyMap = arg6;

export function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod16178.ToObject(arg0);
  }
}
