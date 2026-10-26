// _runtime/15450_CoerceOptionsToObject.js
import _mod15451 from "metro/15451__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15451.ToObject(arg0);
  }
};
