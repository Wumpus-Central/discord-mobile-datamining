// _runtime/13965_CoerceOptionsToObject.js
import _mod13966 from "metro/13966__.js";

require = arg1;
const dependencyMap = arg6;

export const CoerceOptionsToObject = function CoerceOptionsToObject(arg0) {
  if (undefined === arg0) {
    const _Object = Object;
    return Object.create(null);
  } else {
    return _mod13966.ToObject(arg0);
  }
};
