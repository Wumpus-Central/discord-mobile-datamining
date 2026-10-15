// _runtime/15112_CoerceOptionsToObject.js
import _mod15113 from "metro/15113__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15113.ToObject(arg0);
  }
};
