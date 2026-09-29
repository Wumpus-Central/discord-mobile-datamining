// _runtime/13863_CoerceOptionsToObject.js
import _mod13864 from "metro/13864__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13864.ToObject(arg0);
  }
};
