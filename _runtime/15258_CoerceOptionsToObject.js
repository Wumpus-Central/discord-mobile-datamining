// _runtime/15258_CoerceOptionsToObject.js
import _mod15259 from "metro/15259__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15259.ToObject(arg0);
  }
};
