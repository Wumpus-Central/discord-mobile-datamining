// _runtime/14483_CoerceOptionsToObject.js
import _mod14484 from "metro/14484__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod14484.ToObject(arg0);
  }
};
