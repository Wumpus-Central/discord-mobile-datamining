// _runtime/15157_CoerceOptionsToObject.js
import _mod15158 from "metro/15158__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15158.ToObject(arg0);
  }
};
