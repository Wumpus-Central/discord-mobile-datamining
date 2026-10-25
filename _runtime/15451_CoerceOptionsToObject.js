// _runtime/15451_CoerceOptionsToObject.js
import _mod15452 from "metro/15452__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15452.ToObject(arg0);
  }
};
