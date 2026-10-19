// _runtime/15230_CoerceOptionsToObject.js
import _mod15231 from "metro/15231__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15231.ToObject(arg0);
  }
};
