// _runtime/15426_CoerceOptionsToObject.js
import _mod15427 from "metro/15427__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod15427.ToObject(arg0);
  }
};
